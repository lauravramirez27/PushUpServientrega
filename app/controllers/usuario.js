import {con} from "../../config/conection.js";

export const usuarioEnviador = async (req, res)=>{
    try {
      const db = await con();
      const result = await db
        .collection("usuario_enviador")
        .find({})
        .toArray();
        res.send(result);
    } catch (error) {
      console.error(
        "Error al obtener los datos",
        error
      );
      throw error;
    }
  };

  export const usuarioreceptor = async (req, res)=>{
    try {
      const db = await con();
      const result = await db
        .collection("usuario_receptor")
        .find({})
        .toArray();
        res.send(result);
    } catch (error) {
      console.error(
        "Error al obtener los datos",
        error
      );
      throw error;
    }
  };



