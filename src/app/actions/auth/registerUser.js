"use server"

import dbConnect, { collectionNameObj } from "@/lib/dbConnect"
import bcrypt from "bcrypt";

export const registerUser = async (payload) =>{
      const userCollection = dbConnect(collectionNameObj.userCollection)

          //validation
           const {name,email,password} = payload;
           if(!email || !password ) return null;


           const user = await userCollection.findOne({email: payload.email})
           if (!user){
            const hashedPassword= await bcrypt.hash(password,10)
            payload.password = hashedPassword;
           const result = await userCollection.insertOne(payload)
          
           return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(), // 🔧 FIX: Convert ObjectId to string
       };
           }

           return null;
    
      
}