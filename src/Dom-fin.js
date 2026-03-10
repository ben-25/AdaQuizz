import './style.css'

document.querySelector('#fin').innerHTML =
`<div>
    <h1>Score du questionnaire</h1>
    <h2><<Ton score est de>></h2>
    <input id= "button2" class="styled"  type="button" value="Recommencer" />   
</div> 
`
const bouton2 = document.querySelector("#button2")
const acceuil = document.getElementById("Accueil")
const fin = document.getElementById("fin")

bouton2.addEventListener("click", () => { 
    acceuil.style.display = "block";
    fin.style.display = "none";   
});