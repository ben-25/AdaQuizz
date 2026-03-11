import './style.css'
import { scoreEnd } from './question-fonction'
import quiz from "./quiz-femmes-scientifiques.json"

export function domFin(){
    let result;
    let pourcentage = scoreEnd/quiz.questions.length*100;
    console.log(pourcentage);
    if (pourcentage == 0){
        result = `Oups ! Tu n'as trouvé aucune bonne réponse 😱`;
    } else if (pourcentage < 50){
        result = `Aïe, tu as beaucoup d'erreurs, tu devrais réessayer 😅`;
    } else if (pourcentage < 80){
        result = `C'est pas mal, mais tu peux encore t'améliorer 💪`;
    } else if (pourcentage < 100){
        result = `C'est bien, tu as fait peu d'erreurs 😉`;
    } else {
        result = `Aucune erreur, c'est parfait 😎`;
    }
    document.querySelector('#app').innerHTML =`
    <main>
        <h1>${result}</h1>
        <h2>Ton score est de ${scoreEnd} / ${quiz.questions.length}</h2>
        <input id="restart" type="button" value="Recommencer" />   
    </main> 
    `
}