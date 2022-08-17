import bcrypt from 'bcrypt';
import dotenv  from 'dotenv';

dotenv.config({path:"../../"})

class Password{

    // return cyphertext of password
    static encryptPassword(pswd){
 return bcrypt.hashSync(pswd, parseInt(process.env.SALT));
    }


//  function toreturn if password is matching true or false (comparesync ireba ko bimaching ika returning true or false)
    static checkPassword(hashedPswd, normalPswd){
        return bcrypt.compareSync(normalPswd, hashedPswd)

    }

}

export default Password; 