import { responseError } from "./reposonse.helper.js";
import jwt from "jsonwebtoken";

export const handleError = (err, req, res, next) => {
   console.log({ err });
   if(err instanceof jwt.TokenExpiredError) {
      err.code = 403
   }
   
   const resData = responseError(err.message, err.code, err.stack);
   res.status(resData.code).json(resData);
};

export class BadRequestException extends Error {
   constructor(message = `BadRequestException`) {
      super(message);
      this.code = 400;
   }
}

export class ForbiddenException extends Error {
   constructor(message = `ForbiddenException`) {
      super(message);
      this.code = 403;
   }
}
