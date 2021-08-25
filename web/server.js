let express = require("express")
let bp = require("body-parser")
let nodemailer = require("nodemailer")

let PORT = 5050

let contactformemail = "comicdevs.project@gmail.com"
let contactformpass = ""

let app = express()
app.use(express.static("public"))
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/home.html")
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
                res.send("error")
            }  else {
                console.log("Form sent. (" + email + ")")
                res.send("success")
            }
        })
    }
})

app.listen(PORT, () => {
    console.log("Server running");
});