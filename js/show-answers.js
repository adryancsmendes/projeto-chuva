//Esse script expande e retrai as respostas contidas no segunda pergunta presente na página.

let perguntaDois = document.querySelector(".discussions__content-question2");
let respostas = document.querySelector(".discussions__content-question2-answers-group")

perguntaDois.addEventListener("click",function() {
    expandirRetrairRepostas();
})

respostas.style.display="none";
function expandirRetrairRepostas() {
    if(respostas.style.display === "none"){
        respostas.style.display = "inline";
    }else{
        respostas.style.display = "none";
    }
}