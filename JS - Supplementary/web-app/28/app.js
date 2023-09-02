// ?
const getBtn = document.querySelector("#get-btn")
const postBtn = document.querySelector("#post-btn")

const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = "json"
        if(data){   // agar POSt bud...
            xhr.setRequestHeader("Content-Type", "application/json")   // noe data ke az tarighe app ersal mikonim be shekle json hast.
        }
        xhr.onload = () => {
            resolve(xhr.response)
        }
        xhr.onerror = () => {
            reject("Error")
        }
        xhr.send(JSON.stringify(data))
    })
    return promise
}

const getData = () => {
    sendHttpRequest("GET", "http://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

const postData = () => {
    sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
        userId: 2,
        id: 2,
        title: "Post title",
        body: "Post body"
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

getBtn.addEventListener("click", getData)
postBtn.addEventListener("click", postData)
