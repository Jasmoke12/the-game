const questions = {
    1: [
        { question: "¿Cuál es la forma correcta del verbo to be en primera persona?", answer: "I am" },
        { question: "¿Cómo se dice 'ella es' en inglés?", answer: "She is" },
        { question: "¿Cómo se dice 'ellos son' en inglés?", answer: "They are" },
        { question: "¿Cómo se dice 'tú eres' en inglés?", answer: "You are" },
        { question: "¿Cómo se dice 'él es' en inglés?", answer: "He is" }
    ],
    2: [
        { question: "¿Cómo se dice 'él no es' en inglés?", answer: "He doesn't" },
        { question: "¿Cómo se dice 'nosotros no somos' en inglés?", answer: "We don't" },
        { question: "¿Cómo se dice 'ella no tiene' en inglés?", answer: "She doesn't have" },
        { question: "¿Cómo se dice 'yo no voy' en inglés?", answer: "I don't go" },
        { question: "¿Cómo se dice 'tú no eres' en inglés?", answer: "You don't" }
    ],
    3: [
        { question: "¿Cómo se forma el plural de 'baby'?", answer: "babies" },
        { question: "¿Cómo se forma el plural de 'city'?", answer: "cities" },
        { question: "¿Cómo se forma el plural de 'party'?", answer: "parties" },
        { question: "¿Cómo se forma el plural de 'puppy'?", answer: "puppies" },
        { question: "¿Cómo se forma el plural de 'lady'?", answer: "ladies" }
    ],
    4: [
        { question: "¿Cuál es el comparativo de 'good'?", answer: "better" },
        { question: "¿Cuál es el superlativo de 'bad'?", answer: "worst" },
        { question : "¿Cuál es el comparativo de 'big'?", answer: "bigger" },
        { question: "¿Cuál es el superlativo de 'small'?", answer: "smallest" },
        { question: "¿Cuál es el comparativo de 'happy'?", answer: "happier" }
    ]
};

const levelImages = {
    1: {
        backgroundImage: 'background1.jpeg',
        enemyImage: 'enemy1.png'
    },
    2: {
        backgroundImage: 'background2.jpg',
        enemyImage: 'enemy2.png'
    },
    3: {
        backgroundImage: 'background3.jpg',
        enemyImage: 'enemy3.png'
    },
    4: {
        backgroundImage: 'background4.jpg',
        enemyImage: 'enemy4.png'
    }
};

let currentLevel = 1;
let currentQuestionIndex = 0;
let enemyHealth = 100;
let playerHealth = 100;

function startLevel(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    enemyHealth = 100;
    playerHealth = 100;
    document.getElementById('enemyHealth').style.width = '100%';
    document.getElementById('enemyStatus').innerText = "Vida: " + enemyHealth;
    document.getElementById('playerHealth').style.width = '100%';
    document.getElementById('playerStatus').innerText = "Vida: " + playerHealth;
    document.getElementById('questionSection').style.display = 'block';
    document.getElementById('backgroundImage').style.backgroundImage = `url(${levelImages[level].backgroundImage})`;
    document.getElementById('enemyImage').src = levelImages[level].enemyImage;
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentLevel][currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = questions[currentLevel][currentQuestionIndex].answer.toLowerCase();
    if (userAnswer === correctAnswer) {
        enemyHealth -= 20;
        document.getElementById('enemyHealth').style.width = `${enemyHealth}%`;
        document.getElementById('enemyStatus').innerText = "Vida: " + enemyHealth;
        if (enemyHealth <= 0) {
            alert("¡Ganaste! ¡Pasa al siguiente nivel!");
            currentLevel++;
            startLevel(currentLevel);
        }
    } else {
        playerHealth -= 20;
        document.getElementById('playerHealth').style.width = `${playerHealth}%`;
        document.getElementById('playerStatus').innerText = "Vida: " + playerHealth;
        if (playerHealth <= 0) {
            alert("¡Perdiste! ¡Juego terminado!");
            // Reinicia el juego aquí
        }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions[currentLevel].length) {
        currentQuestionIndex = 0;
    }
    displayQuestion();
    document.getElementById('answer').value = '';
}

// Inicia el juego automáticamente en el nivel 1
startLevel(currentLevel);