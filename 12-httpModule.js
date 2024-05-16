const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req);
    // console.log(res)
    // res.write('Welcome to home page')
    // res.end()
    // console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our home page')
        return;
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
        return;
    }
    res.end(`<h1> Oops! </h1>
    <p> We can't seem to find the page you are looking for </p>
    `)
})

server.listen(5000)
