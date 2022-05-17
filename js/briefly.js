//Esse script expande e retrai o resumo.
let resumo = document.querySelector(".briefly__text");

resumo.addEventListener("click", function () {
    expandirRetrairResumo();
    resumo.classList.add("briefly__text--active");
})

function expandirRetrairResumo() {

    let pieceOfText = document.querySelector(".briefly__hide-text");
    let seeMoreDots = document.querySelector(".briefly__see-more-dots");
    let seeMore = document.querySelector(".briefly__see-more");
    let completeText = document.querySelector(".briefly__complete-text");

        if (seeMoreDots.style.display === "none") {
            pieceOfText.style.display="inline";
            seeMoreDots.style.display = "inline";
            seeMore.style.display = "inline";
            completeText.style.display = "none";
        } else {
            pieceOfText.style.display="none";
            seeMoreDots.style.display = "none";
            seeMore.style.display = "none";
            completeText.style.display = "inline";
        }
}
