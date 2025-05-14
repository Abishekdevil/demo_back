const express=require('express');
const app=express();
const PORT=4001;
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Welcome you all");
});

app.post('/signUp',(req,res)=>{
    const{Username,Email,Password,DateOfBirth}=req.body;
    if(!Username){
        return res.status(400).json({error:"Username cannot be empty"})
    }
    if(!Email){
        return res.status(400).json({error:"Email cannot be empty"})
    }
    if(!8<Password.length>=16){
        return res.status(400).json({error:"Password length should be greater than 8 or less than or equal to 16"})
    }
    res.json({
            Message:"Successful",
            Username:{Username},
            Email:{Email},
            Password:{Password},
            DateOfBirth:{DateOfBirth},
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})