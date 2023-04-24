import type { NextApiRequest,NextApiResponse } from "next";
import { connect } from '../../../database/db';
import { db } from "@/database";
import { Entry,IEntry } from "@/models";
import { NextRequest } from "next/server";
import EntryModel from "@/models/Entry";

type Data = 
 |{ message:string}
 |IEntry[]
 |IEntry

 export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>) 
    {

    switch (req.method) {
        case 'GET':
            return getEntries(res)
            
        
        default:
            return res.status(404).json({message:'Endpoint no existe'});
    }
      
  }
  
const getEntries = async(res:NextApiResponse<Data>) =>{

    await db.connect();
    
    const restaurant = await Entry.find();




    await db.disconnect();

    res.status(200).json(restaurant);

}
