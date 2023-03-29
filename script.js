const quizData = [
    {
        question: "¿Cuántas lunas tiene Jupiter? 🌜",
        a: "12",
        b: "Mas de 70",
        c: "34",
        d: "No tiene lunas",
        correct: "b"
    },
    {
        question: "¿A qué distancia se encuentra la Luna de la Tierra? 🌎",
        a: "415.000 km",
        b: "324.000 km",
        c: "384.000 km",
        d: "298.000 km",
        correct: "c",
    },
    {
        question: "¿Qué vehículo de lanzamiento ha realizado más misiones? 🚀",
        a: "Saturno V",
        b: "Falcon 9",
        c: "Atlas V",
        d: "Soyuz",
        correct: "d",
    },
    {
        question: "¿Qué significan las siglas NASA? 👩‍🚀",
        a: "National Administracion Space Aeronautics",
        b: "National Aeronautics Space Agency",
        c: "National Agency Space Aeronautics",
        d: "National Aeronautics Space Administration",
        correct: "d",
    },

];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const toggles = document.querySelectorAll('.toggle')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if (muyDificil.checked && dificil.checked && facil.checked) {
        if (muyDificil === theClickedOne) {
            facil.checked = false
        }

        if (dificil === theClickedOne) {
            muyDificil.checked = false
        }

        if (facil === theClickedOne) {
            dificil.checked = false
        }
    }
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Has contestado ${score}/${quizData.length} preguntas correctas</h2>
                <h2>Cuán difícil te parecieron estas preguntas?</h2>
    <div class="toggle-container">
      <input type="checkbox" id="muyDificil" class="toggle">
      <label for="muyDificil" class="label">
        <div class="ball"></div>
      </label>
      <span>Muy difícil</span>
    </div>

    <div class="toggle-container">
      <input type="checkbox" id="dificil" class="toggle">
      <label for="dificil" class="label">
        <div class="ball"></div>
      </label>
      <span>Difícil</span>
    </div>

    <div class="toggle-container">
      <input type="checkbox" id="facil" class="toggle">
      <label for="facil" class="label">
        <div class="ball"></div>
      </label>
      <span>Fácil</span>
    </div>
    <button onclick="location.reload()">Recargar</button>
    `
        }
    }
});

