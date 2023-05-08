let questions = [
  {
    question: "Was ist der Lieblingsfilm eines Programmierers?",
    answer1: "The Matrix",
    answer2: "Hackers",
    answer3: "Tron",
    answer4: "Office Space",
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

let currentQuestion = 0;

function render() {
  document.getElementById("allQuestions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer1").innerHTML = question["answer1"];
  document.getElementById("answer2").innerHTML = question["answer2"];
  document.getElementById("answer3").innerHTML = question["answer3"];
  document.getElementById("answer4").innerHTML = question["answer4"];
}

function answer(answerX) {
  let question = questions[currentQuestion];
  let selectedAnswerNumber = answerX.slice(-1);

  let idOfRightAnswer = `answer${question["rightAnswer"]}`;

  if (selectedAnswerNumber == question["rightAnswer"]) {
    document.getElementById(answerX).parentNode.classList.add("bg-success");
  } else {
    document.getElementById(answerX).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
}
