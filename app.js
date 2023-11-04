import dotenv  from "dotenv";
import express from "express";


import appusuario from "./app/routes/usuario.js";



dotenv.config();
let app =express();

app.use(express.json());


 app.use('/usuario',appusuario);




let config = JSON.parse(process.env.MY_SERVER);
app.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`);

});