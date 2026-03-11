import { domAccueil } from "./Dom-acceuil";
import { domFin } from "./Dom-fin";

export function affichage(){
    domAccueil();
    document.querySelector("#start").addEventListener("click", () => {
        domFin();
        document.querySelector("#restart").addEventListener("click", () => {
            affichage();
        })
    })
}