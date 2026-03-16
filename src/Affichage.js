<<<<<<< HEAD
import { domAccueil } from "./Dom-accueil";
import { domFin } from "./Dom-fin";
import { domQuestion } from "./Dom-question";
import { resetScore } from "./question-fonction";

export function affichage() {
    domAccueil();
    document.addEventListener("click", (btn) => {
        if (btn.target.id === "start") {
            domQuestion();
        }
        if (btn.target.id === "end") {
            domFin();
        }
        if (btn.target.id === "restart") {
            resetScore();
            affichage();
        }
    });
}
=======
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
>>>>>>> 0c35982103b75f62cc18b4907d4fbf23d989c281
