import express from "express";
import routesVersioning  from 'express-routes-versioning';
import {paquetes} from "../controllers/paquete.js";


const version = routesVersioning();
const apppaquetes = express.Router();

apppaquetes.get("/", version({
    "1.0.0": paquetes
})); 








export default apppaquetes