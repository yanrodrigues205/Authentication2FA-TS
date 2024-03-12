import { Router } from "express";

export const routes = Router();

routes.get("/", (req, res) => {
    // enviar req e res para os controladores
    res.status(202).json({
        message: "welcome to my application!"
    })
});