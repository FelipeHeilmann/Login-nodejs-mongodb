import express from "express"

const routes = (app) =>{
    app.route('/').get((req,res)=>{
        res.status(200).json({message: `pagina principal`})
    })
}

export default routes