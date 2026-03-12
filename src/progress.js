export function updateProgressBar(question, totalQuestions) {
    const progressBarre = document.querySelector(".progress-barre")
    const progress = (question / totalQuestions) * 100;
    console.log(progress)
    progressBarre.style.width = progress + "%";
    progressBarre.textContent = Math.round(progress) + "%";
}