const questions = [
  {
    question: "Какой язык работает в браузере?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 4,
  },
  {
    question: "Что означает CSS?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: 2,
  },
  {
    question: "Что означает HTML?",
    answers: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: 1,
  },
  {
    question: "В каком году был создан JavaScript?",
    answers: ["1996", "1995", "1994", "все ответы неверные"],
    correct: 2,
  },
  {
    question: "Где верно указан вывод данных?",
    answers: [
      'documentWrite("Hello")',
      "print(Hello)",
      'write("Hello")',
      'console.log("Hello")',
    ],
    correct: 4,
  },
  {
    question: "Где можно использовать JavaScript?",
    answers: [
      "Мобильные приложения",
      "Веб-приложения",
      "Можно во всех перечисленных",
      "Серверные приложения",
    ],
    correct: 3,
  },
  {
    question: "Что такое условный оператор?",
    answers: [
      "Конструкция, что выполняет код несколько раз",
      "конструкция для создания определенной переменной",
      "Оператор сравнения значений",
    ],
    correct: 3,
  },
  {
    question: "Где верно указан запуск всплывающего окна?",
    answers: [
      'new alert ("Hi")',
      'info ("Hi")',
      "Нет верных вариантов",
      'alert ("Hi")',
    ],
    correct: 4,
  },
];

let score = 0;
let questionIndex = 0;

const headerContainer = document.querySelector(".quiz-header");
const listContainer = document.querySelector(".quiz-list");
const submitBtn = document.querySelector(".submit");

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage() {
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
}

function showQuestion() {
  const question = questions[questionIndex]["question"];

  const headerTamplate = `  <h2 class="title">${question}</h2>`;

  headerContainer.innerHTML = headerTamplate;

  for ([index, answer] of questions[questionIndex]["answers"].entries()) {
    answerText = answer;

    const questionTamplate = `
	      <li>
	        <label>
	         <input value=${index + 1} type="radio" class="answer" name="answer" />
	        <span>${answerText}</span>
	      </label>
         </li>`;

    listContainer.innerHTML += questionTamplate;
  }
}

function checkAnswer() {
  const checkRadio = listContainer.querySelector("input:checked");

  if (!checkRadio) {
    return;
  }

  const userAnswer = parseInt(checkRadio.value);

  if (userAnswer === questions[questionIndex]["correct"]) {
    score++;
  }

  if (questionIndex !== questions.length - 1) {
    questionIndex++;
    clearPage();
    showQuestion();
  } else {
    clearPage();
    showResults();
  }
}

function showResults() {
  let title, message;

  if (score === questions.length) {
    title = "Поздравляем 🦾 ты чемпион";
    message = "Вы ответили верно на все вопросы 👽 ";
  } else if ((score * 100) / questions.length >= 50) {
    title = "Неплохой резултат 😉 ";
    message = "Вы дали более половины правильных ответов";
  } else {
    title = "Стоит постараться 🤔";
    message = "Меньше половины правильних ответов";
  }

  let result = `${score} из ${questions.length}`;

  const resultsTemplate = `
	
  <h2 class="title">${title}</h2>
  <h3 class="summary">${message}</h3>
  <p class="result">${result}</p>
  `;

  headerContainer.innerHTML = resultsTemplate;

  submitBtn.innerHTML = "Начать заново";
  submitBtn.onclick = () => history.go();
}
