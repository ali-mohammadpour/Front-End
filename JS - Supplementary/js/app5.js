let course = {
    name: "Advanced JS",
    studentLimit: 30,
    studentCount: 0,
    checkAvailability: function(newSigned){
        let leftCount = this.studentLimit - this.studentCount
        return newSigned <= leftCount   // shart bargharar nabashe "false" barmigardune.
        /* az "this" dakhele sakhtemane object zamani estefade mikonim ke
        mikhaym az dakhele ye method be sayere key-value haye birun az method dastrasi peyda konim. */
    }
}

let showStatus = course.checkAvailability(20)
console.log(showStatus)

course.studentCount = 15
showStatus = course.checkAvailability(20)
console.log(showStatus)
