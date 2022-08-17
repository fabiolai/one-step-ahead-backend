import UserInfo from "../models/userModel"

class Datachecker{
    static validateEmailDuplication=async (req,res,next)=>{
        const email=await UserInfo.findOne({email:req.body.email});

        //console email

        if(!email){
            return next()
        }
        return res.status(404).json({
            status:404,
            message:"email already exist"
        })
    }
    static checkAge=(req,res,next)=>{ 
        if (req.body.age<18){
            return res.status(404).json({
                status:404,
                message:"you are under age. no access"
            })
        }
        return next();
    }
}
export default Datachecker;