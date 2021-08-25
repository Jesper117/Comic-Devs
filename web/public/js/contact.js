let namebox = document.getElementById("name")
let emailbox = document.getElementById("email")
let questionbox = document.getElementById("question")
let submitbtn = document.getElementById("submit")



let db = false

submitbtn.addEventListener("click", (e) => {
  e.preventDefault()
  
  if (db == false) {
    db = true

    let formdata = {
      name: namebox.value,
      email: emailbox.value,
      question: questionbox.value
    }

    let xhr = new XMLHttpRequest()
    xhr.open("POST", "/submitform")
    xhr.setRequestHeader("content-type", "application/json")
    
    xhr.onload = function() {
      response = xhr.responseText

      console.log(response)

      if (xhr.responseText == "error") {
        namebox.value =  "Er is iets  mis gegeaan."
        emailbox.value =  "Er is iets  mis gegeaan."
        questionbox.value =  "Er is iets  mis gegeaan."
      } else {
        namebox.value =  ""
        emailbox.value =  ""
        questionbox.value =  ""
      }


      db = false
    }

    xhr.send(JSON.stringify(formdata))
  }
})