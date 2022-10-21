

// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: 'Mostarda',
        lastName: 'Lobato',
        occupation: 'coronel',
        color: 'amarelo',
        age: 49,
        description: '',
        image: 'monteiro.jpg'
    },
    {
        firstName: 'Pacheco',
        lastName: 'da Silva',
        occupation: 'médico',
        color: 'verde',
        age: 38,
        description: 'Já fez algumas eutanásias',
        image: 'pacheco.jpg'
    },
    {
        firstName: 'Brandão',
        lastName: 'Soares',
        occupation: 'professor',
        color: 'roxo',
        age: 55,
        description: '',
        image: 'brandao.jpg'
    },
    {
        firstName: 'Melissa',
        lastName: 'Silveira',
        occupation: 'advogada',
        color: 'azul',
        age: 44,
        description: '',
        image: 'melissa.jpg'
    },
    {
        firstName: 'Scarlet',
        lastName: 'Fernandes',
        occupation: 'enfermeira',
        color: 'vermelho',
        age: 33,
        description: '',
        image: 'isabel.jpg'
    },
    {
        firstName: 'Ana',
        lastName: 'Souza',
        occupation: 'bibliotecária',
        color: 'branco',
        age: 22,
        description: '',
        image: 'ana.jpg'
    }
];

// Rooms Array

const roomsArray = [
    {
        name: 'Biblioteca',
    },
    {
        name: 'Jardm',
    },
    {
        name: 'Sala de Estar',
    },
    {
        name: 'Quarto',
    },
    {
        name: 'Banheiro',
    },
    {
        name: 'Suite',
    },
    {
        name: 'Jardim',
    },
    {
        name: 'Sala de Jantar',
    },
    {
        name: 'Cozinha',
    },
    {
        name: 'Sala do Cinema',
    },
    {
        name: 'Sala de Estudos',
    },
    {
        name: 'Sala de reunião',
    },
    {
        name: 'Lavandeira',
    },
    {
        name: 'Quintal',
    },
    {
        name: 'Terraço',
    }
];

// Weapons Array

const weaponsArray = [
    {
        name: 'faca',
        weight: 5
    },
    {
        name: 'revólver',
        weight: 9
    },
    {
        name: 'chave de fenda',
        weight: 6
    },
    {
        name: 'granada',
        weight: 10
    },
    {
        name: 'arco e flecha',
        weight: 4
    },
    {
        name: 'espinguarda',
        weight: 8
    },
    {
        name: 'veneno',
        weight: 7
    },
    {
        name: 'canivete',
        weight: 6
    },
    {
        name: 'spray de pimenta',
        weight: 3
    }
];


// ITERATION 2

function selectRandom(array) {
    const posicao = parseInt(Math.random()*array.length);
    return array[posicao];
}

function pickMystery() {
    const mystery = {};
    mystery.suspect = selectRandom(suspectsArray);
    mystery.weapon = selectRandom(weaponsArray);
    mystery.room = selectRandom(roomsArray);
    return mystery;
}


// ITERATION 3

function revealMystery(mystery) { 
    return `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!`
}

