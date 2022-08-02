import userService from "../services/userService";


class userController{

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
    

}

export default userController;