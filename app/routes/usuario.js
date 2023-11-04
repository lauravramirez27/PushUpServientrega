import express from "express";
import routesVersioning  from 'express-routes-versioning';
import { usuarioEnviador,usuarioreceptor} from "../controllers/usuario.js";


const version = routesVersioning();
const appusuario = express.Router();

appusuario.get("/enviador", version({
    "1.0.0": usuarioEnviador
})); 

appusuario.get("/receptor", version({
    "1.0.0": usuarioreceptor
})); 






export default appusuario