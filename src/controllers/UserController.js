import Users from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import {validateFields, validatePass, createHash, checkPass} from '../validations/validate.js'


class UserController{

    static getUserEmail = async(email)=>{
        return await Users.findOne({email: email})
    }

    static loginUser = async(req,res)=>{
        const {email,password} = req.body
        if(validateFields(email, password)){
            return res.status(422).json({message: "the fields cant be empty"})
        }
        const user= await UserController.getUserEmail(email)
        if(!user){
            return res.status(422).json({message: "User was not found"})
        }

        const checkedPass = await checkPass(password, user.password)
        if(!checkedPass){
            return res.status(422).json({message: "password incorrect!"})
        }

        try{
            const secret = process.env.SECRET
            const token = jwt.sign({
                id: user._id,
                },
                secret
            )
            return res.status(201).json({message: "user authenticated", token})
        }
        catch(err){
            return res.status(401).json({message: err.message})
        }
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
            return res.status(500).json({message: err.message})
        }

    }

    static getUsetInfo = async(req,res)=>{
        const {id} = req.params
        const user = await Users.findById(id, '-password')
        if(!user){
            return res.status(400).json({message: "user was not found"})
        }
        else{
            return res.status(200).json({user})
        }
    }
}

export default UserController