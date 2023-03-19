import express from "express"
import user from './userRoutes.js'

const routes = (app) =>{
    app.use(user)
    app.route('/').get((req,res)=>{
        res.status(200).json({message: `pagina principal`})
    })
}

export default routes