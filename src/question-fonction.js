import quiz from "./quizz-femmes-scientifiques.json"

export function check(i, index, value){
    if (value == quiz.questions[i].options[index]){
        document.querySelector('#reponse').innerHTML = `
        <h2>Bonne reponse</h2>
        <input type="button" id="next" value="Question suivante">
        `
    } else {
        document.querySelector('#reponse').innerHTML = `
        <h2>Mauvaise reponse</h2>
        <input type="button" id="next" value="Question suivante">
        `
    }
}