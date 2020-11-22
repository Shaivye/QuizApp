var express = require('express')
const fs = require('fs');

var html = ""
var output = ""


fs.readFile('./index.html', (err, data) => {
    if (err) {
        console.log("err")
        throw err
    }

    html = data.toString()
})


const app = express()

app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
    res.writeHeader(200, {"Content-Type": "text/html"})
    res.write(template(html, output))
})

app.post('/', (req, res) => {
    res.writeHeader(200, {"Content-Type": "text/html"})
    res.write(template(html,find(req.body.fn)))
})

function find(fn) {
    switch (fn) {
    case '1':
        return "Incorrect Answer, Try again."
    case '2':
        return "Correct Answer"
    case '3':
        return "Incorrect Answer, Try again."
    case '4':
        return "Incorrect Answer, Try again."
    }
}


function template(html, output, x, y) {
     return html.replace('{{OUTPUT}}', output)
            
}

app.listen(3000)
