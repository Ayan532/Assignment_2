const { isUsernameValid, isPasswordValid } = require("../utils/validFunction");

//Create a static db that contains register users
const db=[
    {
       username:"Ayan123",
       password:"123@abc"
    }, 
    {
       username:"Ashraf345",
       password:"456@def"
    } 
]

exports.login=async(req,res)=>{
  

    const {username,password}=req.body;

    if(!username || !password){
        return res.status(404).json({
            message:"Username and Password Required."
        })
    }
    if(!isUsernameValid(username)  ){
        return res.status(400).json({
            message:"Username not valid."
        })
    
    }
    if(!isPasswordValid(password)){
        return res.status(400).json({
            message:"password not valid."
        })
    }
    const user=db.find((user)=> {if(username===user.username && password===user.password){
        return user;
    }})

    if(!user){
        return res.status(400).json({
            message:"Please Register"
        })
    }

    res.status(200).json({
        message:"Login Succesfull"
    })

}