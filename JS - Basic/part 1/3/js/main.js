var p1 = document.getElementById("p1");

p1.addEventListener("click", changeColor);

function changeColor(){
    p1.style.color = "red";
}

var p2 = document.getElementById("p2");

p2.addEventListener("click", displayDate);

function displayDate(){
    console.log(Date());
}
