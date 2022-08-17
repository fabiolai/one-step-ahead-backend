import jwt from "jsonwebtoken";
import dotenv from "dotenv";



 class TokenAuth{

    // function to generate token
    static generateToken(data){
        const token  = jwt.sign (data, process.env.JWT_KEY, {expiresIn: "1d"});
        return token;
    }
    //decode token

    static decodeToken (token){
        const data = jwt.verify(token, process.env.JWT_KEY);
        return data;
    }
}
export default TokenAuth;