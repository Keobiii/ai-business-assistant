import { Request, Response } from "express";

import {
    processAssistantMessage
} from "../services/assistant.service";


export async function chatAssistant(
    req: Request,
    res: Response
){

    try {

        const {
            message
        } = req.body;


        if(!message){

            return res.status(400).json({

                success:false,

                message:"Message is required"

            });

        }


        const answer =
            await processAssistantMessage(message);


        return res.json({

            success:true,

            answer

        });


    } catch(error){

        console.error(error);


        return res.status(500).json({

            success:false,

            message:"AI request failed"

        });

    }

}