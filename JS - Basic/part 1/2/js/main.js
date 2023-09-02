var pTag = document.createElement("p");

var text = document.createTextNode("This is a paragraph.");

pTag.appendChild(text);

var divTag = document.getElementById("show");

divTag.appendChild(pTag);

// divTag.removeChild(pTag);

var newP = document.createTextNode("New paragraph.");

divTag.replaceChild(newP, pTag);
