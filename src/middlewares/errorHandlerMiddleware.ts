import httpStatus from "http-status";
import { Request, Response, NextFunction } from "express";
import { ApplicationError } from "../protocols/error.protocol";

export default function handleErrorsMiddleware(err: ApplicationError | Error, req: Request, res: Response, next: NextFunction) {
  console.log(err);
  res.send(httpStatus.INTERNAL_SERVER_ERROR);
}