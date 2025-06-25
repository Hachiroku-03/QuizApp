
  
//   let currentQuestion = 0;
//   let score = 0;
  
//   function loadQuestion() {
//     const questionEl = document.getElementById("question");
//     const optionsEl = document.getElementById("options");
//     const current = quizData[currentQuestion];
  
//     questionEl.textContent = current.question;
//     optionsEl.innerHTML = "";
  
//     current.options.forEach(option => {
//       const card = document.createElement("div");
//       card.className = "option-card";
  
//       const inner = document.createElement("div");
//       inner.className = "option-inner";
  
//       const front = document.createElement("div");
//       front.className = "option-front";
//       front.textContent = option;
  
//       const back = document.createElement("div");
//       back.className = "option-back";
//       back.textContent = option;
  
//       inner.appendChild(front);
//       inner.appendChild(back);
//       card.appendChild(inner);
//       optionsEl.appendChild(card);
  
//       front.onclick = () => handleAnswer(card, option, back);
//     });
//   }
  
//   function handleAnswer(card, selected, back) {
//     const correctAnswer = quizData[currentQuestion].answer;
//     const isCorrect = selected === correctAnswer;
  
//     back.classList.add(isCorrect ? "correct" : "incorrect");
//     card.classList.add("flipped");
  
//     if (isCorrect) score++;
  
//     setTimeout(() => {
//       currentQuestion++;
//       if (currentQuestion < quizData.length) {
//         loadQuestion();
//       } else {
//         showResult();
//       }
//     }, 1000);
//   }
  
//   function showResult() {
//     document.getElementById("quiz").style.display = "none";
//     const result = document.getElementById("result");
//     result.style.display = "block";
//     result.textContent = `You scored ${score} out of ${quizData.length}!`;
//   }
  
//   function showResult() {
//   document.getElementById("quiz").style.display = "none";
//   const result = document.getElementById("result");
//   const scoreText = document.getElementById("score-text");

//   scoreText.textContent = `You scored ${score} out of ${quizData.length}!`;
//   result.style.display = "block";
// }

  
  
//   function restartQuiz() {
//     currentQuestion = 0;
//     score = 0;
//     document.getElementById("result").style.display = "none"; 
//     document.getElementById("quiz").style.display = "block"; 
//     loadQuestion(); 
//   }
    
//     document.addEventListener("DOMContentLoaded", loadQuestion);


const quizData = [
    {
      question: "1. What is the name of Naruto's signature technique?",
      options: ["Rasengan", "Kamehameha", "Spirit Gun", "Getsuga Tensho"],
      answer: "Rasengan"
    },
    {
      question: "2. Who is the main protagonist of Attack on Titan?",
      options: ["Armin Arlert", "Levi Ackerman", "Eren Yeager", "Mikasa Ackerman"],
      answer: "Eren Yeager"
    },
    {
      question: "3. Which anime features a notebook that can kill anyone whose name is written in it?",
      options: ["Bleach", "Death Note", "Parasyte", "Elfen Lied"],
      answer: "Death Note"
    },
    {
      question: "4. In One Piece, what is the name of Luffy's pirate crew?",
      options: ["Blackbeard Pirates", "Red-Haired Pirates", "Straw Hat Pirates", "Heart Pirates"],
      answer: "Straw Hat Pirates"
    },
    {
      question: "5. Who is the Fullmetal Alchemist?",
      options: ["Roy Mustang", "Edward Elric", "Alphonse Elric", "Scar"],
      answer: "Edward Elric"
    },
    {
      question: "6. Which anime is about a girl trapped in a video game world called Aincrad?",
      options: ["Log Horizon", "Overlord", "Sword Art Online", "No Game No Life"],
      answer: "Sword Art Online"
    },
    {
      question: "7. What is Goku's Saiyan name in Dragon Ball Z?",
      options: ["Vegeta", "Broly", "Kakarot", "Bardock"],
      answer: "Kakarot"
    },
    {
      question: "8. Which anime features characters fighting with “Quirks”?",
      options: ["One Punch Man", "My Hero Academia", "Demon Slayer", "Tokyo Ghoul"],
      answer: "My Hero Academia"
    },
    {
      question: "9. Who is the main demon slayer in Kimetsu no Yaiba?",
      options: ["Zenitsu Agatsuma", "Giyu Tomioka", "Tanjiro Kamado", "Muzan Kibutsuji"],
      answer: "Tanjiro Kamado"
    },
    {
      question: "10. Which anime follows a detective trying to find a high schooler turned child?",
      options: ["Steins;Gate", "Erased", "Detective Conan", "Ghost in the Shell"],
      answer: "Detective Conan"
    },
     {
    question: "11. What is the name of Ichigo Kurosaki's Bankai?",
    options: ["Tensa Zangetsu", "Senbonzakura", "Zanka no Tachi", "Hakka no Togame"],
    answer: "Tensa Zangetsu"
  },
  {
    question: "12. Which captain’s Bankai summons a giant skeletal warrior?",
    options: ["Komamura", "Hitsugaya", "Kyoraku", "Mayuri"],
    answer: "Komamura"
  },
  {
    question: "13. What is the name of Byakuya Kuchiki's Bankai?",
    options: ["Senbonzakura Kageyoshi", "Tensa Zangetsu", "Bankai Jūshirō", "Hyōrinmaru"],
    answer: "Senbonzakura Kageyoshi"
  },
  {
    question: "14. What ability does Tōshirō Hitsugaya gain when he activates his Bankai?",
    options: ["Ice wings and freezing power", "Fire manipulation", "Healing", "Teleportation"],
    answer: "Ice wings and freezing power"
  },
  {
    question: "15. How is Kenpachi Zaraki's Bankai transformation described?",
    options: ["A red-skinned berserker form", "A giant shadow", "Flaming armor", "A freezing demon"],
    answer: "A red-skinned berserker form"
  },
  {
    question: "16. What is the name of Renji Abarai's true Bankai?",
    options: ["Sōō Zabimaru", "Hihiō Zabimaru", "Sode no Shirayuki", "Benihime"],
    answer: "Sōō Zabimaru"
  },
  {
    question: "17. Which Bankai can unleash flames powerful enough to destroy Soul Society?",
    options: ["Zanka no Tachi", "Tensa Zangetsu", "Senbonzakura Kageyoshi", "Minazuki"],
    answer: "Zanka no Tachi"
  },
  {
    question: "8. Whose Bankai creates a dome of darkness that removes all five senses from the opponent?",
    options: ["Kaname Tōsen", "Gin Ichimaru", "Urahara Kisuke", "Komamura"],
    answer: "Kaname Tōsen"
  },
  {
    question: "9. Which character’s Bankai creates a giant mechanical humanoid that mirrors their movements?",
    options: ["Komamura", "Mayuri Kurotsuchi", "Urahara", "Shunsui"],
    answer: "Komamura"
  },
  {
    question: "10. Which captain modified his Bankai to produce explosive child-like clones?",
    options: ["Mayuri Kurotsuchi", "Ukitake", "Byakuya", "Hitsugaya"],
    answer: "Mayuri Kurotsuchi"
  },
  {
    question: "11. What is the name of Shūhei Hisagi’s Bankai (as revealed in the novels)?",
    options: ["Kazeshini Kakei", "Fushi no Kojyo", "Tensa Zangetsu", "None revealed"],
    answer: "Fushi no Kojyo"
  },
  {
    question: "12. Which Bankai allows the user to control the size and direction of their blade segments?",
    options: ["Senbonzakura Kageyoshi", "Benihime", "Zangetsu", "Minazuki"],
    answer: "Senbonzakura Kageyoshi"
  },
  {
    question: "13. Which Bankai manifests as a giant missile launcher attached to the user’s arm?",
    options: ["Benihime Aratame", "Hakka no Togame", "Konjiki Ashisogi Jizō", "Jakuhō Raikōben"],
    answer: "Jakuhō Raikōben"
  },
  {
    question: "14. Which character’s Bankai creates a void of complete darkness and blindness?",
    options: ["Tōsen", "Aizen", "Yamamoto", "Shinji"],
    answer: "Tōsen"
  },
  {
    question: "15. What happens to Yamamoto's body when he activates Zanka no Tachi West?",
    options: ["He is cloaked in flames of 15 million degrees", "He turns invisible", "He gains icy armor", "He becomes a dragon"],
    answer: "He is cloaked in flames of 15 million degrees"
  },
  {
    question: "16. How many directional forms (East, West, North, South) does Yamamoto's Bankai have?",
    options: ["4", "3", "2", "1"],
    answer: "4"
  },
  {
    question: "17. Which character is known for a Bankai that stores and mimics enemy powers?",
    options: ["Kisuke Urahara", "Ichibe Hyōsube", "Shunsui Kyōraku", "Yhwach"],
    answer: "Kisuke Urahara"
  },
  {
    question: "18. Which Bankai allows the summoning of fallen enemies from the dead?",
    options: ["Katen Kyōkotsu: Karamatsu Shinjū", "Zanka no Tachi South", "Kazeshini", "Kirinji Tensei"],
    answer: "Zanka no Tachi South"
  },
  {
    question: "19. Which Bankai multiplies swords by the thousands and sends them flying at opponents?",
    options: ["Senbonzakura Kageyoshi", "Tensa Zangetsu", "Benihime", "Zanka no Tachi North"],
    answer: "Senbonzakura Kageyoshi"
  },
  {
    question: "20. Which captain unlocked their Bankai during the Thousand-Year Blood War arc only for it to be destroyed immediately?",
    options: ["Kensei Muguruma", "Sajin Komamura", "Rose Otoribashi", "Ichigo Kurosaki"],
    answer: "Rose Otoribashi"
  }
  ];



let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const current = quizData[currentQuestion];

  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const card = document.createElement("div");
    card.className = "option-card";

    const inner = document.createElement("div");
    inner.className = "option-inner";

    const front = document.createElement("div");
    front.className = "option-front";
    front.textContent = option;

    const back = document.createElement("div");
    back.className = "option-back";
    back.textContent = option;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    optionsEl.appendChild(card);

    front.onclick = () => handleAnswer(card, option, back);
  });
}

function handleAnswer(card, selected, back) {
  const correctAnswer = quizData[currentQuestion].answer;
  const isCorrect = selected === correctAnswer;

  // Prevent multiple clicks
  document.querySelectorAll(".option-front").forEach(el => {
    el.onclick = null;
  });

  back.classList.add(isCorrect ? "correct" : "incorrect");
  card.classList.add("flipped");

  if (isCorrect) score++;

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  const result = document.getElementById("result");
  const scoreText = document.getElementById("score-text");

  scoreText.textContent = `You scored ${score} out of ${quizData.length}!`;
  result.style.display = "block";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}

document.addEventListener("DOMContentLoaded", loadQuestion);
