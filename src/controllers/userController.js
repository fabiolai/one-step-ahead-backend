import userService from "../services/userService";
import handlePassword from "../utils/handlepassord";
import TokenAuth from "../utils/token";

class userController{
  // login user

  static async loginuserController(req, res) {
    const User = await userService.loginUser(req);
    if (!User) {
      return res.status(400).json({ message: "user is not exist" });
    }
    if (handlePassword.checkPassword(User.password, req.body.password)) {
      const token =TokenAuth.generateToken({
        phone: User.phone,
        email:User.email,
        picture: User.picture,
        names: User.names,
        role:User.role

      })
      return res.status(200).json({ message: "logged in successfully" , token});
    } else {
      return res
        .status(400)
        .json({ message: "failed to loggin , Password is wrong" });
    }
  }

    // signupcontroller

    static async signUpUser (req, res) {
        const newUser = await userService.signUpUser(req);
        if (!newUser) {
          return res.status(401).json({ message: "failed to register" });
        }
        return res.status(200).json({ message: "success", data: newUser });
      }

      //getuser

      static async getUsers  (req, res) {
        const newUser = await userService.getUsers(req);
        if (!newUser) {
          return res.status(401).json({ message: "failed to register" });
        }
        return res.status(200).json({ message: "success", data: newUser });
      }

      //update user
       static async updateUsers (req, res){

        const newUser = await userService.updateUser(req);
        if (!newUser){
          return res.status(401).json({message: "fail to update"});

        }
        return res.status(200).json({message:"updated",data: newUser});
       }

     
     
      
     
    
    

}

export default userController;