import quiz from "./quizz-femmes-scientifiques.json"
import './style.css'
import { check } from "./question-fonction"
import { activerBtn } from "./question-fonction"

let i = 0;

function afficherQuestion(i){
  document.querySelector('#app').innerHTML = `
  <header>
  <h1>${quiz.title}</h1>
  </header>
  <main>
  <div id="question">
        <h2>${quiz.questions[i].question}</h2>
    </div>
    <div id="choix">
    <input type="button" value="${quiz.questions[i].options[0]}">
        <input type="button" value="${quiz.questions[i].options[1]}">
        <input type="button" value="${quiz.questions[i].options[2]}">
        <input type="button" value="${quiz.questions[i].options[3]}">
    </div>
    <div id="reponse"></div>
  </main>
  `
}
afficherQuestion(i);
activerBtn(i, afficherQuestion);