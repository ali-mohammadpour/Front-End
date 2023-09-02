// DOM: Document Object Model.

var pList = document.querySelectorAll("p");

console.log(pList[2]);

var i;
for(i = 0; i < pList.length; i++){
    pList[i].style.color = "red";
}
