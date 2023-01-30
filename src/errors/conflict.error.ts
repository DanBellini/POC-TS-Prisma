import { ApplicationError } from "../protocols/error.protocol.js";

export default function conflictError(message: string): ApplicationError {
  return {
    name: "ConflictError",
    message,
   };
};