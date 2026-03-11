import { domAccueil } from "./Dom-acceuil";
import { domFin } from "./Dom-fin";
import { domQuestion } from "./Dom-question"
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
