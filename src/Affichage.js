import { domAccueil } from "./Dom-acceuil";
import { domQuestion } from "./Dom-question"
import { domFin } from "./Dom-fin";


export function affichage() {
    domAccueil();

    document.addEventListener("click", (e) => {
        if (e.target.id === "start") {
            domQuestion();
        }

        if (e.target.id === "end") {
            domFin();
        }

        if (e.target.id === "restart") {
            domAccueil();
        }
    });
}
