import express from 'express';

const app = express();
const PORT = process.env.PORT||5000

/*let data = {
    name: "james",
    age: 40,
    school: "imsu"
}*/
 let data = ["james"]


 //middleware
 app.use(express.json())

//CRUD -method create-POST, read- GET, update-PUT, delete-DELETE
//app.get("/",(req,res)=>( res.send("Hello Welcome"),console.log('we sent a  welome message' ,req.method) ))

app.get("/",(req,res)=>( /*res.send(data), console.log(`we sent info about clients data`,req.method)*/
    res.send(`
        <body style = "background:pink; color :blue;"> <h1>DATA:</h1>
        <p>${JSON.stringify(data)} </p> </body>
        <a href = "/dashboard">DashBoard</a>
        `)
))

app.get("/dashboard",(req,res)=>{
    res.send(
        ` <body> 
        <h1> DashBoard </h1>
        </body>
        <a href = "/"> Home </a>
        `
    )
})
 

app.get('/api/data',(req,res)=>{
    console.log('This one was for data')
    res.status(201).send(data)
})


app.post('/api/data',(req,res) =>{
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201);
} )


app.delete('/api/data',(req,res)=>{
    data.pop()
    console.log(`we deleted element from this array`)
    res.sendStatus(203)
})
app.listen(PORT,()=> console.log(`Server has started on port ${PORT}`))