import './style.css'
import { activerBtn } from './question-fonction'


export function domFin(){
    const score = activerBtn();
    document.querySelector('#app').innerHTML =`
    <main>
        <h1>Score du questionnaire</h1>
        <h2>Ton score est de ${score}</h2>
        <input id="restart" type="button" value="Recommencer" />   
    </main> 
    `
}