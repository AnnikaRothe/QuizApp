let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer1: "Deine Mutter",
    answer2: "Tim Berners-Lee",
    answer3: "Prinzessin Lilifee",
    answer4: "Shrek",
    rightAnswer: 2,
  },
  {
    question:
      "Wie viele Programmierer braucht man, um eine Glühbirne zu wechseln?",
    answer1: "Einen, aber er muss erst 100 Zeilen Code schreiben.",
    answer2: "Zwei, aber nur, wenn sie Stack Overflow zur Hand haben.",
    answer3:
      "Drei, einer wechselt die Glühbirne und die anderen schreiben einen neuen Algorithmus.",
    answer4: "Keinen, das ist ein Hardware-Problem.",
    rightAnswer: 4,
  },
  {
    question: "Warum mögen Programmierer Katzen?",
    answer1: "Weil sie genauso faul sind wie Katzen.",
    answer2:
      "Weil Katzen gerne auf Tastaturen herumlaufen und Programmierer es gewohnt sind, mit Tippfehlern umzugehen.",
    answer3:
      "Weil Programmierer gerne Code schreiben, der wie eine Katze funktioniert: schlank, elegant und unabhängig.",
    answer4: "Weil sie Hunde hassen.",
    rightAnswer: 2,
  },
  {
    question: "Was ist das Lieblingslied eines Programmierers?",
    answer1: " The Logical Song von Supertramp",
    answer2: " Binary Love von Heart of Space",
    answer3: "The Code von Muse",
    answer4: "Programming von Joey Fehrenbach",
    rightAnswer: 2,
  },
  {
    question:
      "Wie viele Programmierer braucht man, um eine Pizza zu bestellen?",
    answer1:
      " Einen, aber er muss sicherstellen, dass die Lieferadresse korrekt formatiert ist.",
    answer2:
      "Zwei, aber nur, wenn sie ein Pull-Request-System verwenden, um sicherzustellen, dass die richtige Pizza ausgewählt wird.",
    answer3:
      "Drei, einer, der bestellt, einer, der das Trinkgeld berechnet und einer, der den Code schreibt, um den Pizza-Tracker zu automatisieren.",
    answer4:
      "Keinen, sie programmieren einen Roboter, der die Pizza für sie bestellt.",
    rightAnswer: 4,
  },
];

let correctAnswers = 0;
let currentQuestion = 0;

function render() {
  document.getElementById("allQuestions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    //Show end screen
    document.getElementById("endScreen").style = "";
    document.getElementById("questionBody").style = "display:none";

    document.getElementById("amountQuestions").innerHTML = questions.length;
    document.getElementById("amountCorrectAnswers").innerHTML = correctAnswers;
    document.getElementById("headerImage").src = "./img/wellDone.png";
  } else {
    //Show current question

    let percent = (currentQuestion + 1) / questions.length;
    //zum Aufrunden
    percent = Math.round(percent * 100);
    document.getElementById("progressBar").innerHTML = `${percent}%`;
    document.getElementById("progressBar").style = ` width:${percent}%`;

    let question = questions[currentQuestion];

    document.getElementById("currentNumber").innerHTML = currentQuestion + 1;
    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer1").innerHTML = question["answer1"];
    document.getElementById("answer2").innerHTML = question["answer2"];
    document.getElementById("answer3").innerHTML = question["answer3"];
    document.getElementById("answer4").innerHTML = question["answer4"];
  }
}

function answer(answerX) {
  let question = questions[currentQuestion];
  let selectedAnswerNumber = answerX.slice(-1);
  let idOfRightAnswer = `answer${question["rightAnswer"]}`;

  if (selectedAnswerNumber == question["rightAnswer"]) {
    document.getElementById(answerX).parentNode.classList.add("bg-success");
    correctAnswers++;
  } else {
    document.getElementById(answerX).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("button").disabled = false;
}

function nextQuestion() {
  currentQuestion++; //von Frage 0 zu Frage 1 und so weiter (globale Variable)

  document.getElementById("button").disabled = true;
  resetAnswerColors();
  showQuestion();
}

function resetAnswerColors() {
  document.getElementById("answer1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer1").parentNode.classList.remove("bg-success");
  document.getElementById("answer2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer2").parentNode.classList.remove("bg-success");
  document.getElementById("answer3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer3").parentNode.classList.remove("bg-success");
  document.getElementById("answer4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer4").parentNode.classList.remove("bg-success");
}
