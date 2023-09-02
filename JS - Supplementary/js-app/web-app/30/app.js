const getBtn = document.querySelector("#get-btn")
const postBtn = document.querySelector("#post-btn")

const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {   // ?
            console.log(res)
        })
}

const postData = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", {
        userId: 1,
        id: 2,
        title: "Post title",
        body: "Post body"
    }).then(res => {
        console.log(res)
    })
}

getBtn.addEventListener("click", getData)
postBtn.addEventListener("click", postData)
