import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator'

const {Schema}=mongoose;

const UserShema= new Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        unique:true,
        lowercase: true,
        validate:[validator.isEmail, "Please Enter a valid Email"]
    },
    password:{
        type:String,
        required: true,
        select:false,
        validate:[
            {
                validator: value=> validator.isStrongPassword(value),
                message: "Password must be contain Letters digits and symbols"
            }
        ]
    }

},{
    timestamps:true
})

UserShema.pre("save", async function(){
    if(!this.isModified("password")){
        return;
    }
    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
});

UserShema.methods.ComparePassword=async function(interPassword){
    return await bcrypt.compare(interPassword,this.password);
}
export const User=mongoose.model("User",UserShema);

export default User