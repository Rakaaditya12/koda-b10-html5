const btnHover = document.getElementById("btn-hover");

btnHover.addEventListener("mouseover", () => {
    const arrowRight = document.querySelector(".arrow-right");

    arrowRight.style.transition = "0.4s";
    arrowRight.style.transform = "translate(10px)";

    btnHover.addEventListener("mouseleave", () => {
        arrowRight.style.transform = "";
    })
})