import chalk from "chalk";
import User from "../model/user.js";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './../config/config.js';

export const registerUser= async(req,res)=>{

    try {
        const{username,email,password}=req.body;

        const UserIsExits= await User.findOne({
            $or:[
                {email:email.toLowerCase()},
                {username:username.toLowerCase()}
            ]
        })
        if(UserIsExits){
           return res.status(400).send("Username or Email address already exits")
        }

        const userInfo= new User({
            username:username,
            email:email,
            password:password
        })
        await userInfo.save();


        userInfo.password=undefined;


        res.status(200).send(userInfo)
    } catch (error) {
        console.log(chalk.red.bold("Error "),error )
    }
}


export const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;

        const IsuserExits= await User.findOne({email:email.toLowerCase()}).select("+password");

        if(!IsuserExits){
            return res.status(400).send("email Not Found please register now")
        }

        const isPasswordCorrect= await IsuserExits.ComparePassword(password);

        if(!isPasswordCorrect){
            return res.status(400).send("Incorrect Password");
        }

        // generate jwt

        const expiresIn= 7 * 24* 60 * 60;

        const token= jwt.sign({_id:IsuserExits._id}, JWT_SECRET,{expiresIn});

        res.cookie('token', token,{
            httponly: true,
            secure:false,
            maxAge: expiresIn * 1000
        })

        IsuserExits.password=undefined;

        res.status(200).send({...IsuserExits.toJSON()}, expiresIn)


    } catch (error) {
        console.log(chalk.red.bold("Error login "),error)
    }
}