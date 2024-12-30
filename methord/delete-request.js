const writeTofFile = require("../utils/write-to-file")

module.exports = (req, res) => {
    let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    let id = req.url.split("/")[3]
    let regexv4 = new RegExp("^[a-zA-Z0-9]+$")
    if (!regexv4.test(id)) {
        res.statusCode = 404;
        res.end(JSON.stringify({ title: "Not Found", message: "UI Not Foud" }))
    } else if (regexv4.test(id) && baseURL == '/api/movies/') {
        const index = req.movies.findIndex((movies) => movies.id === id)
        if (index === -1) {
            res.statusCode = 404;
            res.end(JSON.stringify({ title: "Not Found", message: "movies Not Foud" }))
        } else {
            req.movies.splice(index, 1)
            writeTofFile(req.movies)
            res.writeHead(204, { "Content-Type": "application-json" })
            res.end(JSON.stringify({ message: "deleted successfully" }))
        }
    }

}