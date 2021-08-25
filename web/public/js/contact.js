let namebox = document.getElementById("name")
let emailbox = document.getElementById("email")
let questionbox = document.getElementById("question")
let submitbtn = document.getElementById("submit")



let db = false

submitbtn.addEventListener("click", (e) => {
  e.preventDefault()
  
  if (db == false) {
    db = true
    
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "/submitform")
    xhr.setRequestHeader("content-type", "application/json")
    
    xhr.onload = function() {
      
    }
    
    xhr.send(JSON.stringify({
        name: namebox.value,
        email: emailbox.value,
        question: questionbox.value
    }))
  }
})