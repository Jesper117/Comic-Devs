let express = require("express")

let PORT = 5050

let app = express()
app.use(express.static("public"))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/home.html")
})

app.post("/submitform", function(req, res) {
    let ip = req.headers["x-forwarded-for"].split(",")[0];
  
    console.log("New participant: ", ip)
    console.log(req.body)
})

app.listen(PORT, () => {
    console.log("Server running");
});