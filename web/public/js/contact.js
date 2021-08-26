let namebox = document.getElementById("name")
let emailbox = document.getElementById("email")
let questionbox = document.getElementById("question")
let submitbtn = document.getElementById("submit")
let returntxt = document.getElementById("return")

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

      namebox.value =  ""
      emailbox.value =  ""
      questionbox.value =  ""

      returntxt.innerHTML = response


      db = false
    }

    returntxt.innerHTML = "Het fomulier wordt verwerkt..."

    xhr.send(JSON.stringify(formdata))
  }
})