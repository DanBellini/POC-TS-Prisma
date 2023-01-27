import { ApplicationError } from "../protocols/error.protocol.js";

export default function notFoundError(): ApplicationError {
  return {
    name: "NotFoundError",
    message: "No results for this search!"
  };
};