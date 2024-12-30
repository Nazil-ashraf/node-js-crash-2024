const crypto = require("crypto")
const requestBodyParser = require("../utils/body-parser");
const writeTofFile = require("../utils/write-to-file")

module.exports = async (req, res) => {

    if (req.url === "/api/movies") {
        console.log(req.url, 'awiat')
        try {

            let body = await requestBodyParser(req)
            body.id = crypto.randomUUID();
            req.movies.push(body);
            writeTofFile(req.movies)
            res.writeHead(201, { "Content-Type": "application-json" })
            res.write(JSON.stringify({ data: body, message: "movies added successfully" }))
            res.end()

        } catch (err) {
            res.writeHead(400, { "Content-Type": "application-json" })
            res.end(JSON.stringify({ title: "not correct response", message: "failed to addd movies" }))
        }


    } else {
        res.writeHeader(404, ("Content-Type", "application-json"))
        res.end(JSON.stringify({ title: "Not Found", message: "Rowwute Not Foud" }))
    }
}