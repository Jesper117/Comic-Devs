let express = require("express")
let bp = require("body-parser")
let nodemailer = require("nodemailer")

let PORT = 3000

let contactformemail = "comicdevs.project@gmail.com"
let contactformpass = ""

let app = express()
app.use(express.static("public"))
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/home.html")
})

app.get("/public/google28e7dcb62095a520.html", function(req, res) {
  res.sendFile(__dirname + "/google28e7dcb62095a520.html")
})

app.post("/submitform", function(req, res) {
    let email = req.body.email
    let name = req.body.name
    let question = req.body.question

    if (email.includes("@") && email.includes(".")) {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: contactformemail,
                pass: contactformpass
            }
        })

        let mailopts = {
            from: email,
            to: contactformemail,
            subject: `Contact form request: ${name}, ${email}`,
            text: question
        }

        transporter.sendMail(mailopts, (err, info) => {
            if (err) {
                console.log(err)
                res.send("Er is iets mis gegeaan.")
            }  else {
                console.log("Form sent. (" + email + ")")
                res.send("Het formulier is verstuurd.")
            }
        })
    } else {
        res.send("Voer een geldig e-mail adres in.")
    }
})

app.listen(PORT, () => {
    console.log("Server running");
});