module.exports = (req, res) => {
    let baseURL = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    let id = req.url.split("/")[3]
    let regexv4 = new RegExp("^[a-zA-Z0-9]+$")
    console.log(baseURL == '/api/movies/', baseURL, '/api/movies/')
    if (req.url == '/api/movies') {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application-json")
        res.write(JSON.stringify(req.movies))
        res.end()
    } else if (regexv4.test(id) && baseURL == '/api/movies/') {
        let filtered = req.movies.filter((elem) => id === elem.id)

        if (filtered?.length > 0) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application-json")
            res.write(JSON.stringify({ data: filtered, message: "movies find successfully" }))
            res.end()
        } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ title: "Not Found", message: "movies Not Foud" }))
        }
    } else if (!regexv4.test(id)) {
        res.statusCode = 404;
        res.end(JSON.stringify({ title: "Not Found", message: "UI Not Foud" }))
    }

    else {
        res.writeHeader(404, ("Content-Type", "application-json"))
        res.end(JSON.stringify({ title: "Not Found", message: "Rowwute Not Foud" }))
    }
}