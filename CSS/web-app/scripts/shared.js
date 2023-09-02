let backdrop = document.querySelector(".backdrop");   // kole tag ro miyare.
let modal = document.querySelector(".modal");
let selectPlanBtn = document.querySelectorAll(".plan button");
let modalCloseBtn = document.querySelector(".modal__action--negative");

for(let i = 0; i < selectPlanBtn.length; i++){
    selectPlanBtn[i].addEventListener("click", () => {
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        modal.classList.add("open");
        backdrop.classList.add("open");
    })
}

modalCloseBtn.addEventListener("click", closeModal);   // mikhaym bade click shodan farakhani beshe; na belafasele.

function closeModal(){
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    modal.classList.remove("open");
    backdrop.classList.remove("open");
}
