const http = require('http')
const port = process.env.PORT ||3000;
const server = http.createServer((req,res)=>{
const fs = require('fs')   
    
    console.log(req.url)    
    res.setHeader('Content-Type', 'text/html')

if(req.url=='/'){
    const data = fs.readFileSync('index.html')
    res.end(data.toString())
}

else if(req.url=='/portfolio'){
    const data = fs.readFileSync('section.html')
    res.end(data.toString())
}
else if(req.url=='/about'){
    const data = fs.readFileSync('about.html')
    res.end(data.toString())
}
else if(req.url=='/contact'){
    const data = fs.readFileSync('contact.html')
    res.end(data.toString())
}
else if(req.url=='/projects'){
    const data = fs.readFileSync('projects.html')
    res.end(data.toString())
}
else{
    res.statusCode=404;
    res.end('<p>page not found</p>')
}
    
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})