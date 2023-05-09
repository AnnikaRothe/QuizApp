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
// Erstellt die Variablen correctAnswers und currentQuestion und initialisiert sie mit dem Wert 0
let correctAnswers = 0;
let currentQuestion = 0;

// Erstellt neue Audio-Objekte und lädt MP3-Dateien
let audioGreen = new Audio("mp3/applause.mp3");
let audioRed = new Audio("mp3/haha.mp3");
let finalAudio = new Audio("mp3/finalApplause.mp3");

// Definiert die Funktion render, die das HTML-Dokument aktualisiert und die Funktion showQuestion aufruft
function render() {
  // Ändert den Inhalt des HTML-Elements mit der ID "allQuestions" auf die Länge des Arrays questions
  document.getElementById("allQuestions").innerHTML = questions.length;

  // Ruft die Funktion showQuestion auf
  showQuestion();
}

// Definiert die Funktion showQuestion, die je nach Zustand des Spiels entweder das Endscreen anzeigt oder zur nächsten Frage wechselt
function showQuestion() {
  // Überprüft, ob das Spiel beendet ist (wenn alle Fragen beantwortet wurden)
  if (gameIsOver()) {
    // Zeigt das Endscreen an
    showEndScreen();
  } else {
    // Aktualisiert den Fortschrittsbalken und wechselt zur nächsten Frage
    updateProgressBar();
    updateToNextQuestion();
  }
}

// Definiert die Funktion gameIsOver, die zurückgibt, ob das Spiel beendet ist (wenn alle Fragen beantwortet wurden)
function gameIsOver() {
  return currentQuestion >= questions.length;
}

// Definiert die Funktion showEndScreen, die das Endscreen anzeigt und das Ergebnis des Spielers anzeigt
function showEndScreen() {
  // Ändert die Anzeige des Endscreens
  document.getElementById("endScreen").style = "";
  document.getElementById("questionBody").style = "display:none";

  // Setzt den Fortschrittsbalken auf 100%
  document.getElementById("progressBar").innerHTML = `${100}%`;
  document.getElementById("progressBar").style = ` width:${100}%`;

  // Zeigt die Anzahl der Fragen und korrekten Antworten an
  document.getElementById("amountQuestions").innerHTML = questions.length;
  document.getElementById("amountCorrectAnswers").innerHTML = correctAnswers;

  // Ändert das Bild und spielt das Final-Applaus-Sound ab
  document.getElementById("headerImage").src = "./img/wellDone.png";
  finalAudio.play();
}

// Definiert die Funktion updateProgressBar, die den Fortschrittsbalken aktualisiert
function updateProgressBar() {
  // Berechnet den Fortschritt in Prozent und rundet ihn auf
  let percent = currentQuestion / questions.length;
  percent = Math.round(percent * 100);

  // Aktualisiert den Fortschrittsbalken
  document.getElementById("progressBar").innerHTML = `${percent}%`;
  document.getElementById("progressBar").style = ` width:${percent}%`;
}

function updateToNextQuestion() {
  // Aktuelle Frage abrufen
  let question = questions[currentQuestion];

  // Aktuelle Frage-Nummer und Frage-Text in HTML-Elemente schreiben
  document.getElementById("currentNumber").innerHTML = currentQuestion + 1;
  document.getElementById("questionText").innerHTML = question["question"];

  // Antwortmöglichkeiten in HTML-Elemente schreiben
  document.getElementById("answer1").innerHTML = question["answer1"];
  document.getElementById("answer2").innerHTML = question["answer2"];
  document.getElementById("answer3").innerHTML = question["answer3"];
  document.getElementById("answer4").innerHTML = question["answer4"];
}

function answer(answerX) {
  // Aktuelle Frage abrufen
  let question = questions[currentQuestion];
  // Nummer der ausgewählten Antwort ermitteln
  let selectedAnswerNumber = answerX.slice(-1);
  // ID der richtigen Antwort ermitteln
  let idOfRightAnswer = `answer${question["rightAnswer"]}`;

  // Wenn ausgewählte Antwort richtig ist
  if (selectedAnswerNumber == question["rightAnswer"]) {
    // Antwort-Element grün färben und "richtig"-Sound abspielen
    document.getElementById(answerX).parentNode.classList.add("bg-success");
    audioGreen.play();
    correctAnswers++;
  } else {
    // Antwort-Element rot färben und "falsch"-Sound abspielen
    document.getElementById(answerX).parentNode.classList.add("bg-danger");
    // ID der richtigen Antwort auswählen und grün färben
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
    audioRed.play();
  }

  // "Nächste Frage"-Button aktivieren
  document.getElementById("button").disabled = false;
}

function nextQuestion() {
  // Nächste Frage auswählen (globale Variable)
  currentQuestion++;

  // "Nächste Frage"-Button deaktivieren und Antwortfarben zurücksetzen
  document.getElementById("button").disabled = true;
  resetAnswerColors();
  // Neue Frage anzeigen
  showQuestion();
}

function resetAnswerColors() {
  // Alle Antwort-Elemente auf normale Farbe zurücksetzen
  document.getElementById("answer1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer1").parentNode.classList.remove("bg-success");
  document.getElementById("answer2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer2").parentNode.classList.remove("bg-success");
  document.getElementById("answer3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer3").parentNode.classList.remove("bg-success");
  document.getElementById("answer4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  // Startbild wieder anzeigen und Endbildschirm ausblenden
  document.getElementById("headerImage").src = "./img/mainPic.jpg";
  document.getElementById("endScreen").style = "display:none";
  document.getElementById("questionBody").style = "";
  finalAudio.pause();

  // Anzahl der korrekten Antworten und aktuelle Frage-Nummer zurücksetzen
  correctAnswers = 0;
  currentQuestion = 0;
  // Alle Fragen anzeigen
  render();
}
