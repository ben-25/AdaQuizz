import './style.css'
import quizz from "./quizz-femmes.json"

document.querySelector('#app').innerHTML = `
<div>
    <h1>${quizz.title}</h1>
    <input id= "button" class="styled"  type="button" value="Démarrer" />
    <p class="test"></p>
</div> 
`
const bouton = document.querySelector("#button")
bouton.addEventListener("click",() => {
    document.querySelector(".test").innerHTML= `bonne chance`;
})