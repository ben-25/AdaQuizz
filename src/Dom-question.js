import quiz from "./quizz-femmes-scientifiques.json"
import './style.css'

let i = 0;
const reponse = "test";

document.querySelector('#app').innerHTML = `
  <header>
    <h1>${quiz.title}</h1>
  </header>
  <main>
    <div id="question">
        <h2>${quiz.questions[i].question}</h2>
    </div>
    <div id="choix">
        <input type="button" id="" value="${quiz.questions[i].options[0]}">
        <input type="button" id="" value="${quiz.questions[i].options[1]}">
        <input type="button" id="" value="${quiz.questions[i].options[2]}">
        <input type="button" id="" value="${quiz.questions[i].options[3]}">
    </div>
    <div id="reponse">
        <p>${reponse}</p>
    </div>
  </main>
`