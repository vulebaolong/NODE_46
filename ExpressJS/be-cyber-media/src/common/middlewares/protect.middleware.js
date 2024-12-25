import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
   const accessToken = req.headers.authorization.split(" ")[1];

   const decode = jwt.verify(accessToken, `ACCESS_TOKEN_SECRET`);

   console.log({ decode });

   next();
};
