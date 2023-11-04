import {con} from "../../config/conection.js";

export const paquetes = async (req, res)=>{
    try {
      const db = await con();
      const result = await db
        .collection("paquete")
        .aggregate([
            {
              $lookup: {
                from: "usuario_enviador",
                localField: "id_enviador",
                foreignField: "id",
                as: "enviador",
              },
            },
            {
              $lookup: {
                from: "usuario_receptor",
                localField: "id_receptor",
                foreignField: "id",
                as: "receptor",
              },
            },
          ])
        
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



