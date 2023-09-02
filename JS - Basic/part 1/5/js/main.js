function addItem(){
    var inputData = document.getElementById("input").value;

    if(inputData == ""){
        alert("Please enter the task.");
    }else{
        document.getElementById("input").value = "";

        var pTag = document.createElement("p");

        var taskTag = document.createElement("span");

        var task = document.createTextNode(inputData);

        taskTag.appendChild(task);

        pTag.appendChild(taskTag);

        var result = document.getElementById("result");

        result.appendChild(pTag);

        var spaceTag = document.createElement("span");

        var spaceText = document.createTextNode(" ");

        spaceTag.appendChild(spaceText);

        pTag.appendChild(spaceTag);

        var remTag = document.createElement("span");

        var remText = document.createTextNode("x");

        remTag.appendChild(remText);

        pTag.appendChild(remTag);

        remTag.style.color = "red";
        remTag.style.fontWeight = "bold";

        pTag.addEventListener("click", taskDone);

        function taskDone(){
            taskTag.style.textDecoration = "line-through";
        }

        var remove = document.createAttribute("onclick");

        remove.value = "this.parentNode.remove()";

        remTag.setAttributeNode(remove);
    }
}
