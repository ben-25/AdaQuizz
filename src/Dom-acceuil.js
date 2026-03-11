import './style.css'
import quizz from "./quiz-femmes-scientifiques.json"

export function domAccueil(){
    document.querySelector('#app').innerHTML = `
    <main>
        <h1>${quizz.title}</h1>
        <input id="start" type="button" value="Démarrer"/>
    </main> 
    `
}