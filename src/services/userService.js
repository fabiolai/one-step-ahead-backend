import User from "../models/userModel";


class userService{

    // login

    static  async loginUser(req){
        const user = await UserModel.findOne({email:req.body.email});
        return user;
    }

    // signup

    static async signUpUser(req){
        const user = await UserModel.create(req.body);

         return user;

     }

     //get users

     static async getUsers(){
        const user = await UserModel.find();
         return user;

     }


}

export default userService;