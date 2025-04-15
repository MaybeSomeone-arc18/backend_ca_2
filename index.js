const express= require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send(`API is working properly`)
});

const users = [
    {username: "alice", age: 25, email: "alice@example.com"},
    {username: "bob", age: 30, email: "bob@example.com"},
    {username: "charlie", age: 28, email: "charlie@example.com"},
]

app.get('/user'),(req,res)=>{
    const users = res.query.username;

    if(!users){
        return res.query('401').json({error:"User parameter cannot be empty!"})
    };
    return res.json({message:"User Found Successfully", data:`${username}, ${age}, ${email}`})
}

app.listen(PORT,()=>{
    console.log(`Server is running successfully on PORT ${PORT}`)
})