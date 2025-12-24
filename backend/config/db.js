import mongoose from "mongoose";
import { dbUrl } from "./config.js";
import chalk from "chalk";

const connectDatabase=async()=>{
    try {
        await mongoose.connect(dbUrl)
        console.log(`Connect Your Database${chalk.green.bold(dbUrl)}`)
    } catch (error) {
        console.log(chalk.red.bold("Cannot Connect Your db"),error)
    }
    
}

export default connectDatabase;