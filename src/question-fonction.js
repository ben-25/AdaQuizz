import quiz from "./quiz-femmes-scientifiques.json"
import { updateProgressBar } from "./progress";

export let scoreEnd = 0;

export function resetScore(){
    scoreEnd = 0;
}

export function check(i, index, value){
    let nextQuestion;
    if (i == quiz.questions.length - 1){
        nextQuestion = `<input type="button" id="end" value="Voir le score">`
    } else {
        nextQuestion = `<input type="button" id="next" value="Question suivante">`
    }
    if (value == quiz.questions[i].options[index]){
        scoreEnd++;
        document.querySelector('#reponse').innerHTML = `
        <h2 class="good">Bonne reponse</h2>
        ${nextQuestion}
        `
    } else {
        document.querySelector('#reponse').innerHTML = `
        <h2 class="bad">Mauvaise reponse, la bonne réponse est : ${quiz.questions[i].options[index]}</h2>
        ${nextQuestion}
        `
    }
    return scoreEnd;
}

export function activerBtn(i, afficherQuestion, score){
    document.querySelectorAll('#choix input').forEach((btn) => {
        btn.addEventListener('click', () => {
            check(i, quiz.questions[i].correctIndex, btn.value);
            document.querySelectorAll('#choix input').forEach((b) => {
            b.disabled = true;
            });
            const next = document.querySelector("#next");
            const end = document.querySelector("#end");
            if (next){
                next.addEventListener("click", () => {
                    i++;
                    afficherQuestion(i);
                    updateProgressBar(i, quiz.questions.length)
                    activerBtn(i, afficherQuestion, score);
                })
            }
        });
    });
}