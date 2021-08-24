let express = require("express")

let PORT = 5050

let app = express()
app.use(express.static("public"))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/home.html")
})

app.listen(PORT, () => {
    console.log("Server running");
});  