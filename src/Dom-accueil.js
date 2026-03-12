import './style.css'
import quiz from "./quiz-femmes-scientifiques.json"

export function domAccueil(){
    document.querySelector('#app').innerHTML = `
    <main>
        <h1>${quiz.title}</h1>
        <input id="start" type="button" value="Démarrer"/>
    </main> 
    `
}