import Users from '../models/userModel.js'
import {validateFields, validatePass, createHash} from '../validations/validate.js'


class UserController{

    static getUserEmail = async(email)=>{
        return await Users.findOne({email: email})
    }

    static insertUser = async(req, res)=>{
        const {name,email,password, confirm_password} = req.body
        if(validateFields(name, email, password)){
            return res.status(422).json({message: "the fields cant be empty"})
        }
        if(validatePass(password, confirm_password)){
            return res.status(422).json({message: "the passwords doesn't match"})
        }

        const existUser= await UserController.getUserEmail(email)
        if(existUser){
            return res.status(422).json({message: "this email has already been used"})
        }
       
        const passHashed = await createHash(password)

        const user = new Users({
            name, 
            email, 
            password: passHashed
        })

        try{   
            const newUser = await user.save()
            return res.status(200).json(newUser)
        }
        catch(err){
            return res.status(500).json({messa: err.message})
        }

    }
}

export default UserController