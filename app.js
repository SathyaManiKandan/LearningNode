const http = require('http')

const server = http.createServer((req, res)=>{
        if(req.url === '/'){
            res.write('Welcome to homePage')
            res.end()
        }
        if(req.url === '/about'){
            res.end('This is our History')
        }

        res.end(
            `<h1> OOps! </h1>
            <p> Could Not find what you are looking for </p>
            <a href = '/' > backHome </a>
            `
        )
})
server.listen(3000)