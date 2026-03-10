import './style.css'
import quizz from "./quizz-femmes.json"

document.querySelector('#app').innerHTML = `
<div>

    <h1>${quizz.title}</h1>

</div>
<input type="button" placeholder="Démarrer">
`