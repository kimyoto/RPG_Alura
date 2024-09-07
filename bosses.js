const bosses = [
    {
        nome: 'Ignis, o Senhor das Chamas Eternas',
        imagem: 'img/ignis.png',
        falaInicial: 'Sinto o calor das chamas em meus ossos. Prepare-se para ser consumido!',
        fraquezas: ['Água', 'Gelo'],
        resistencias: ['Trevas', 'Veneno'],
        som: "sounds/ignis.mp3",
        somTocado: false // Indica se o som já foi tocado
    },
    {
        nome: 'Voltrix, o Arauto das Tempestades',
        imagem: 'img/voltrix.png',
        falaInicial: 'A fúria dos céus está ao meu lado. Ninguém pode escapar da minha tempestade!',
        fraquezas: ['Terra'],
        resistencias: ['Ar'],
        som: "sounds/voltrix.mp3",
        somTocado: false // Indica se o som já foi tocado
    },
    {
        nome: 'Aquara, a Soberana dos Mares Profundos',
        imagem: 'img/aquara.png',
        falaInicial: 'As profundezas do oceano são o meu reino. Prepare-se para ser submerso!',
        fraquezas: ['Raio', 'Veneno'],
        resistencias: ['Fogo', 'Terra'],
        som: "sounds/aquara.mp3",
        somTocado: false // Indica se o som já foi tocado
    },
    {
        nome: 'Glaciros, o Coração do Inverno',
        imagem: 'img/glaciros.png',
        falaInicial: 'O inverno chegou para congelar seu coração. A frieza é o meu aliado!',
        fraquezas: ['Fogo', 'Trevas'],
        resistencias: ['Água', 'Veneno'],
        som: "sounds/glaciros.mp3",
        somTocado: false // Indica se o som já foi tocado
    },
    {
        nome: 'Noctus, o Devorador de Luz',
        imagem: 'img/noctus.png',
        falaInicial: 'A escuridão engole a luz. Venha e sinta o verdadeiro poder das trevas!',
        fraquezas: ['Luz', 'Fogo'],
        resistencias: ['Terra', 'Veneno'],
        som: "sounds/noctus.mp3",
        somTocado: false // Indica se o som já foi tocado
    },
    {
        nome: 'Terrakhan, o Guardião dos Abismos',
        imagem: 'img/terrakhan.png',
        falaInicial: 'A terra treme diante do meu poder. Ninguém pode desafiar o guardião dos abismos!',
        fraquezas: ['Ar', 'Água'],
        resistencias: ['Raio', 'Veneno'],
        som: "sounds/terrakhan.mp3",
        somTocado: false // Indica se o som já foi tocado
    },
    {
        nome: 'Zephyros, o Sopro da Destruição',
        imagem: 'img/zephiros.png',
        falaInicial: 'O vento é meu aliado e seu pesadelo. Prepare-se para ser varrido!',
        fraquezas: ['Terra'],
        resistencias: ['Gelo', 'Luz'],
        som: "sounds/zephiros.mp3",
        somTocado: false // Indica se o som já foi tocado
    },
    {
        nome: 'Viperion, o Mestre das Toxinas',
        imagem: 'img/viperion.png',
        falaInicial: 'Minhas toxinas são sua condenação. Enfrente o mestre das venenos!',
        fraquezas: ['Gelo', 'Fogo'],
        resistencias: ['Trevas', 'Água'],
        som: "sounds/viperion.mp3",
        somTocado: false // Indica se o som já foi tocado
    },
    {
        nome: 'Aegirion, o Dragão da Armadura de Guerra',
        imagem: 'img/aegirion.png',
        falaInicial: 'Minha armadura é impenetrável. Você precisará de mais do que coragem para me derrotar!',
        fraquezas: ['Raio', 'Trevas'],
        resistencias: ['Fogo', 'Terra'],
        som: "sounds/aegirion.mp3",
        somTocado: false
    },
    {
        nome: 'Luxion, o Dragão da Luz Celestial',
        imagem: 'img/luxion.png',
        falaInicial: 'A luz celestial ilumina meu caminho. Sinta o brilho do poder divino!',
        fraquezas: ['Trevas'],
        resistencias: ['Raio', 'Gelo'],
        som: "sounds/luxion.mp3",
        somTocado: false
    },
    {
        nome: 'Corrosys, o Devorador de Matéria',
        imagem: 'img/corrosys.png',
        falaInicial: 'Meu ácido corroerá sua esperança. Enfrente a devastação com coragem!',
        fraquezas: ['Gelo'],
        resistencias: ['Fogo', 'Água'],
        som: "sounds/corrosys.mp3",
        somTocado: false // Indica se o som já foi tocado
    }
];