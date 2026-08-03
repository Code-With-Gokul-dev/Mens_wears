import express from 'express';


const base = express.Router();

base.get("/", (req, res) => {
    res.json({ message: "hi i am runing" });

})

export default base;

