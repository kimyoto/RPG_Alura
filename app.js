// Variável para contar quantos cliques foram necessários para ganhar
let cliquesNecessarios = 0;

// Seleção dos elementos do DOM
const inputPesquisa = document.getElementById('pesquisa');
const resultadosDiv = document.getElementById('resultados');
const botaoPesquisar = document.getElementById('btn-pesquisar');
const armaEquipada = document.getElementById('arma');
const armaduraEquipada = document.getElementById('armadura');
const aneisEquipados = document.getElementById('anel');
const btnLutar = document.getElementById('btn-lutar');
const lutaBossSection = document.querySelector('.luta-boss');

// Função para realizar a pesquisa ao clicar no botão
botaoPesquisar.addEventListener('click', () => {
    const query = inputPesquisa.value.toLowerCase();
    // se a query tiver vazia, não executar o resto do código
    if (query === '') {
        return;
    }
    resultadosDiv.innerHTML = ''; // Limpa resultados anteriores

    if (query.includes('arma')) {
        mostrarResultados(armasElementais, 'arma');
    } else if (query.includes('equipamento')) {
        mostrarResultados(armadurasElementais, 'equipamento');
    } else if (query.includes('anel')) {
        mostrarResultados(aneisElementais, 'aneis');
    } else {
        pesquisarArmas(query);
        pesquisarEquipamento(query);
        pesquisarAneis(query);
    }
});

// Função para exibir resultados com base na pesquisa de equipamentos
function mostrarResultados(lista, tipo) {
    lista.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item-resultado');
        div.innerHTML = `<h2>${item.nome}</h2><p>${item.descricao}</p>`;
        div.addEventListener('click', () => equiparItem(item.nome, tipo));
        resultadosDiv.appendChild(div);
    });
}

// Função para equipar o item selecionado
function equiparItem(item, tipo) {
    if (tipo === 'arma') {
        armaEquipada.textContent = item;
    } else if (tipo === 'equipamento') {
        armaduraEquipada.textContent = item;
    } else if (tipo === 'aneis') {
        aneisEquipados.textContent = item;
    }
    verificarEquipamentos(); // Verifica se todos os equipamentos estão preenchidos
}

// Função para verificar se todos os equipamentos estão preenchidos
function verificarEquipamentos() {
    if (armaEquipada.textContent !== 'Nenhuma arma equipada' &&
        armaduraEquipada.textContent !== 'Nenhum equipamento equipado' &&
        aneisEquipados.textContent !== 'Nenhum anel equipado') {
        btnLutar.style.display = 'block';
    } else {
        btnLutar.style.display = 'none';
    }
}

// Função de pesquisa de armas elementais
function pesquisarArmas(query) {
    const resultados = armasElementais.filter(arma =>
        arma.tags.some(tag => tag.includes(query.toLowerCase()))
    );
    mostrarResultados(resultados, 'arma');
}

// Função de pesquisa de armaduras elementais
function pesquisarEquipamento(query) {
    const resultados = armadurasElementais.filter(armadura =>
        armadura.tags.some(tag => tag.includes(query.toLowerCase()))
    );
    mostrarResultados(resultados, 'equipamento');
}

// Função de pesquisa de aneis elementais
function pesquisarAneis(query) {
    const resultados = aneisElementais.filter(anel =>
        anel.tags.some(tag => tag.includes(query.toLowerCase()))
    );
    mostrarResultados(resultados, 'aneis');
}

function escolherBossAleatorio() {
    // Seleciona o boss aleatório
    currentBoss = bosses[Math.floor(Math.random() * bosses.length)];

    // Toca o som apenas se ainda não foi tocado
    if (!currentBoss.somTocado) {
        const bossSound = new Audio(currentBoss.som);
        bossSound.volume = 0.5; // Reduz o volume em 50%
        bossSound.play();
        
        // Para o som após 2 segundos
        setTimeout(() => {
            bossSound.pause();
            bossSound.currentTime = 0; // Reseta o som para o início
        }, 2000);

        // Marca que o som já foi tocado
        currentBoss.somTocado = true;
    }

    // Atualiza o conteúdo da seção de luta com as informações do boss
    lutaBossSection.innerHTML = `
        <h3>${currentBoss.nome}</h3>
        <img src="${currentBoss.imagem}" alt="${currentBoss.nome}">
        <p>${currentBoss.falaInicial}</p>
        <div id="resultado-batalha"></div>
    `;
}

function lutar() {
    // Incrementa o contador de cliques cada vez que o jogador clica no botão "Lutar"
    cliquesNecessarios++;

    let dadoJogador = Math.floor(Math.random() * 20) + 1;
    let bonusJogador = 0;
    let dadoBoss = Math.floor(Math.random() * 20) + 1;
    let bonusBoss = 0;

    const equipamentos = {
        'arma': armaEquipada.textContent,
        'armadura': armaduraEquipada.textContent,
        'anel': aneisEquipados.textContent
    };

    const fraquezasBoss = currentBoss.fraquezas;
    const resistenciasBoss = currentBoss.resistencias;

    let nomeArma = "";
    let nomeArmadura = "";
    let nomeAnel = "";

    for (arma of armasElementais) {
        if (arma.nome === equipamentos.arma) {
            nomeArma = arma.nome;
        }
    }

    for (armadura of armadurasElementais) {
        if (armadura.nome === equipamentos.armadura) {
            nomeArmadura = armadura.nome;
        }
    }

    for (anel of aneisElementais) {
        if (anel.nome === equipamentos.anel) {
            nomeAnel = anel.nome;
        }
    }

    // Verifica fraquezas e resistências para calcular o bônus do jogador
    const itensEquipados = [nomeArma, nomeArmadura, nomeAnel];
    let detalhesBonusJogador = '';
    for (let item of itensEquipados) {
        const elementoItem = (armasElementais.find(arma => arma.nome === item) || 
                             armadurasElementais.find(armadura => armadura.nome === item) || 
                             aneisElementais.find(anel => anel.nome === item)).elemento;
                             
        if (fraquezasBoss.includes(elementoItem)) {
            bonusJogador += 1; // Equipamento forte contra o boss
            detalhesBonusJogador += `<li>${item} (${elementoItem}) está na fraqueza do boss. Bônus: +1</li>`;
        } else if (resistenciasBoss.includes(elementoItem)) {
            bonusJogador -= 1; // Equipamento fraco contra o boss
            detalhesBonusJogador += `<li>${item} (${elementoItem}) está na resistência do boss. Bônus: -1</li>`;
        }
    }

    console.log(`Bônus total do jogador: ${bonusJogador}`);

    // Verifica fraquezas e resistências para calcular o bônus do boss
    let detalhesBonusBoss = '';
    for (let item of itensEquipados) {
        const elementoItem = (armasElementais.find(arma => arma.nome === item) || 
                             armadurasElementais.find(armadura => armadura.nome === item) || 
                             aneisElementais.find(anel => anel.nome === item)).elemento;
                             
        if (fraquezasBoss.includes(elementoItem)) {
            bonusBoss -= 1; // Fraqueza do boss
            detalhesBonusBoss += `<li>${item} (${elementoItem}) está na fraqueza do boss. Bônus: -1</li>`;
        } else if (resistenciasBoss.includes(elementoItem)) {
            bonusBoss += 1; // Resistência do boss
            detalhesBonusBoss += `<li>${item} (${elementoItem}) está na resistência do boss. Bônus: +1</li>`;
        }
    }

    console.log(`Bônus total do boss: ${bonusBoss}`);

    dadoJogador += bonusJogador;
    dadoBoss += bonusBoss;

    // Exibe o resultado
    const resultadoDiv = document.getElementById('resultado-batalha');
    let resultado = '';

    if (dadoJogador > dadoBoss) {
        resultado = `Você venceu a batalha contra ${currentBoss.nome}!`;
        // Remove o boss derrotado da lista de bosses
        const index = bosses.findIndex(boss => boss.nome === currentBoss.nome);
        if (index !== -1) {
            bosses.splice(index, 1);
        }

        // Verifica se todos os bosses foram derrotados
        if (bosses.length === 0) {
            resultadoDiv.innerHTML = `
                <h3>Resultado da Batalha</h3>
                <p>Você venceu o jogo! Parabéns 🎉</p>
            `;
            mostrarVitoria(); // Exibe a sobreposição de vitória
            return; // Encerra a função aqui se o jogo foi vencido
        }
    } else if (dadoJogador < dadoBoss) {
        resultado = `Você perdeu a batalha contra ${currentBoss.nome}.`;
    } else {
        resultado = `A batalha contra ${currentBoss.nome} terminou em empate.`;
    }

    resultadoDiv.innerHTML = `
        <h3>Resultado da Batalha</h3>
        <p><strong>Você rolou:</strong> ${dadoJogador - bonusJogador} + ${bonusJogador} (bônus e penalidades de equipamentos) = ${dadoJogador}</p>
        <p><strong>O boss rolou:</strong> ${dadoBoss - bonusBoss} + ${bonusBoss} (bônus e penalidades elementares) = ${dadoBoss}</p>
        <h4 id="texto-vitoria">${resultado}</h4>
        ${detalhesBonusJogador ? `<h4>Bônus do Jogador:</h4><ul>${detalhesBonusJogador}</ul>` : ''}
        ${detalhesBonusBoss ? `<h4>Bônus do Boss:</h4><ul>${detalhesBonusBoss}</ul>` : ''}
    `;
}

// Função para mostrar a sobreposição de vitória
function mostrarVitoria() {
    let vitoriaView = document.getElementById('vitoria');
    vitoriaView.innerHTML = `
        <div>
            <h1>Você venceu, parabéns 🎉</h1>
            <h2>Você enfrentou ${cliquesNecessarios} lutas até vencer o jogo!</h2>
            <button onclick="reiniciarJogo()">Jogar de Novo</button>
        </div>
    `
    document.getElementById('vitoria').style.display = 'flex';
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    // Redefine o estado do jogo aqui, como reiniciar a lista de bosses e o estado do jogador
    location.reload(); // Simplesmente recarrega a página para reiniciar o jogo
}

// Adiciona eventos ao botão "Lutar"
btnLutar.addEventListener('click', () => {
    escolherBossAleatorio();
    lutar();
});

// Verifica equipamentos na carga da página
verificarEquipamentos();

// Cria o objeto de áudio para o som de fundo
const somFundo = new Audio('sounds/som de fundo.mp3');

// Configura o som para tocar automaticamente e se repetir
somFundo.loop = true;
somFundo.play();

// Ajusta o volume (opcional)
somFundo.volume = 0.05; // Reduz o volume para 30%
