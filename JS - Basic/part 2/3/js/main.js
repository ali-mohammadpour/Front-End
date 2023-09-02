var jsonData = {
    "name": "Ali",
    "age": 30,
    "skills": [
        {
            "lang": "JavaScript",
            "frameworks": ["React native", "Vue.js"]
        },
    ]
};

var i, j;
for(i in jsonData.skills){
    for(j in jsonData.skills[i].frameworks){
        console.log(jsonData.skills[i].frameworks[j]);
    }
}
