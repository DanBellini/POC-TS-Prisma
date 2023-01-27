import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";

function validationSchema<T>(schema: ObjectSchema<T>, err: number): ValidationMiddleware {
  
    return (req: Request, res: Response, next: NextFunction) => { 
      const {error} = schema.validate(req.body, {abortEarly: false});
      
      if (error) {
        return res.status(err).send(error.details.map((detail) => detail.message));
      }
  
      next();
    }
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction)=> void;

export { validationSchema };