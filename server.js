const http = require('http');
const getReq = require("./methord/get-request")
let movies = require("./data/movies.json");
const postRequest = require('./methord/post-request');
const deleteReq = require('./methord/delete-request');

// require('dotenv').config()

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    req.movies = movies
    switch (req.method) {
        case 'GET':
            getReq(req, res)
            break;
        case 'POST':
            postRequest(req, res)
            break;
        case 'PUT':
            putReq(req, res)
            break;
        case 'DELETE':
            deleteReq(req, res)
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json")
            res.write(JSON.stringify({ title: "Not Found", message: "Route Not Foud" }))
            res.end()
    }

}

)

server.listen(PORT, () => {
    console.log(`YOU HAVE STARER ,${PORT}`)
})
