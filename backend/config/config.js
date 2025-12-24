import dotenv from 'dotenv';
dotenv.config();


export const dbUrl=process.env.MONGO_URL;
export const Port= process.env.PORT;
export const JWT_SECRET= process.env.JWT_SECRET;
export const CLOUD_NAME= process.env.CLOUD_NAME;
export const CLOUD_API_KEY= process.env.CLOUD_API_KEY;
export const CLOUD_API_SECRET= process.env.CLOUD_API_SECRET;