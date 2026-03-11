import { domAccueil } from "./Dom-acceuil";
import { domFin } from "./Dom-fin";
import { domQuestion } from "./Dom-question"

export function affichage(){
    domAccueil();
    document.querySelector("#start").addEventListener("click", () => {
        domQuestion();
        document.querySelector("#end").addEventListener("click", () => {
            domFin();
            document.querySelector("#restart").addEventListener("click", () => {
                affichage();
            })
        })
    })
}