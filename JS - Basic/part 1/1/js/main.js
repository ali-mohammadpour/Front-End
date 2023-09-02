function change(){
    // var main = document.getElementById("main");

    main.getElementsByTagName("p")[0].innerHTML = "New content";   // taghire text

    main.getElementsByTagName("a")[0].href = "https://vuejs.org";   // taghire link address

    main.getElementsByTagName("a")[1].setAttribute("href", "https://reactjs.org");
    // main.getElementsByTagName("a")[1].href = "https://reactjs.org";

    main.getElementsByTagName("p")[1].style.color = "red";
}
