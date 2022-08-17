import UserModel from "../models/userModel";
import HandlePassword from "../utils/handlepassord";


class userService{

    // login

    static  async loginUser(req){
        const user = await UserModel.findOne({email:req.body.email});
        return user;
    }

    // signup

    static async signUpUser(req){
        req.body.password = HandlePassword.encryptPassword(req.body.password)
        const user = await UserModel.create(req.body);

         return user;

     }

     //get users

     static async getUsers(){
        const user = await UserModel.find(); 
         return user;

     }
     // update user
     static async updateUser(req){
        const user = await UserModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
 
          return user;
 
      }
 
 


}

export default userService;