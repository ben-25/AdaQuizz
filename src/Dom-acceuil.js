import './style.css'
import quizz from "./quizz-femmes.json"

export function domAccueil(){
    document.querySelector('#app').innerHTML = `
    <main>
        <h1>${quizz.title}</h1>
        <input id="start" type="button" value="Démarrer"/>
    </main> 
    `
}