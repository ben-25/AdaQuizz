import quiz from "./quizz-femmes-scientifiques.json"

export function check(i, index, value){
    let nextQuestion;
    if (i == quiz.questions.length - 1){
        nextQuestion = `<input type="button" id="end" value="Voir le score">`
    } else {
        nextQuestion = `<input type="button" id="next" value="Question suivante">`
    }
    if (value == quiz.questions[i].options[index]){
        document.querySelector('#reponse').innerHTML = `
        <h2>Bonne reponse</h2>
        ${nextQuestion}
        `
    } else {
        document.querySelector('#reponse').innerHTML = `
        <h2>Mauvaise reponse</h2>
        ${nextQuestion}
        `
    }
}

 export function activerBtn(i, afficherQuestion){
  document.querySelectorAll('#choix input').forEach((btn) => {
    btn.addEventListener('click', () => {
      check(i, quiz.questions[i].correctIndex, btn.value);
      document.querySelectorAll('#choix input').forEach((b) => {
        b.disabled = true;
      });
      if (next){
        const next = document.querySelector("#next");
        next.addEventListener("click", () => {
          i++;
          afficherQuestion(i);
          activerBtn(i, afficherQuestion);
        })
      } else if (end){
        const end = document.querySelector("#end"); //PAGE DE SCORE
        end.addEventListener("click", () => {
          console.log("Envoyer vers la page de score")
        })
      }
    });
  });
}