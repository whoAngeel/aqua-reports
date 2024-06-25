import { Boom, isBoom } from "@hapi/boom";
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

export function logErrors(error: Error, req: Request, res: Response, next: NextFunction) {
    // console.log(typeof Error);
    console.log(error.message);
    next(error)
}

export function errorHandler(err: Error, req: Request,res: Response,next:NextFunction){
    console.log("ERROR HANDLER");
    console.log(err.message);
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}


export function mongooseErrorHandler(err: Error, req: Request, res: Response, next: NextFunction){
    if(err instanceof mongoose.Error.ValidationError){
        console.log('MONGOSE_ERROR_HANDLER');
        res.status(409).json({
            statusCode: 409,
            message: err.name,
            errors: err.errors
        })
    }
    next(err)
}

export function boomErrorHandler(err: Boom, req: Request, res: Response, next: NextFunction){
    if(isBoom(err)){
        const { output }= err
        res.status(output.statusCode).json(output.payload)
    }else{
        next(err)
    }
}


