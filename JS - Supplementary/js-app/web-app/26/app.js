const getBtn = document.querySelector("#get-btn")
const postBtn = document.querySelector("#post-btn")

const getData = () => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "http://jsonplaceholder.typicode.com/posts/1")
    xhr.responseType = "json"
    xhr.onload = () => {
        console.log(xhr.response)   // pasokhi ke az server bara ma umade.
    }
    xhr.send()
}

const postData = () => {

}

getBtn.addEventListener("click", getData)
postBtn.addEventListener("click", postData)
