import quiz from "./quiz-femmes-scientifiques.json"

export function check(i, index, value, score){
    let nextQuestion;
    if (i == quiz.questions.length - 1){
        nextQuestion = `<input type="button" id="end" value="Voir le score">`
    } else {
        nextQuestion = `<input type="button" id="next" value="Question suivante">`
    }
    if (value == quiz.questions[i].options[index]){
        score++;
        document.querySelector('#reponse').innerHTML = `
        <h2>Bonne reponse</h2>
        ${nextQuestion}
        `
    } else {
        document.querySelector('#reponse').innerHTML = `
        <h2>Mauvaise reponse, la bonne réponse est : ${quiz.questions[i].options[index]}</h2>
        ${nextQuestion}
        `
    }
    return score;
}

export function activerBtn(i, afficherQuestion, score){
    document.querySelectorAll('#choix input').forEach((btn) => {
        btn.addEventListener('click', () => {
            check(i, quiz.questions[i].correctIndex, btn.value, score);
            score = check(i, quiz.questions[i].correctIndex, btn.value, score);
            document.querySelectorAll('#choix input').forEach((b) => {
            b.disabled = true;
        });
        const next = document.querySelector("#next");
        const end = document.querySelector("#end");
        if (next){
            next.addEventListener("click", () => {
                i++;
                afficherQuestion(i);
                activerBtn(i, afficherQuestion, score);
            })
        } else if (end){
            end.addEventListener("click", () => {
                return score;
            })
        }
        });
    });
}