import './style.css'
import quizz from "./quizz-femmes.json"

document.querySelector('#Accueil').innerHTML = `
<div>
    <h1>${quizz.title}</h1>
    <input id= "button" class="styled"  type="button" value="Démarrer" />
    <p class="test"></p>
</div> 

`
const bouton = document.querySelector("#button")
const acceuil = document.getElementById("Accueil")
const fin = document.getElementById("fin")

bouton.addEventListener("click", () => { 
    acceuil.style.display = "none";
    fin.style.display = "block";
   
});

