import './style.css'

export function domFin(){
    document.querySelector('#app').innerHTML =`
    <main>
        <h1>Score du questionnaire</h1>
        <h2>Ton score est de </h2>
        <input id="restart" type="button" value="Recommencer" />   
    </main> 
    `
}