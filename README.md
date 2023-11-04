# PushUpServientrega

![diagrama](https://github.com/lauravramirez27/PushUpServientrega/assets/124936044/549d75a4-e137-488b-a414-c67a28fceba2)


Consultas requeridas:


<hr>

**Instalacion y Uso**

- Asegurarse de tener instalado node.js mongodb



**Instalacion de dependecias**

ejecuta el siguiente comando para instalar las dependencias necesarias ya configuradas

```
npm install
```

**Inicializar el servidor**

ejecuta el siguiente comando para inicializar el servidor

```
npm run dev
```

**EndPoints**
---------

**1.** Listar todos los usuarios que han enviado paquetes.

METODO:GET
URL:http://127.10.10.07:5015/usuario/enviador

trae los siguientes datos:

```
[
  {
    "_id": "6545886d538ccff153a6c092",
    "id": 1,
    "nombre": "Karen",
    "apellido": "Diaz",
    "telefono": "3202036410",
    "direccion": "avenida 50",
    "pais": "Colombia",
    "departamento": "Santander",
    "municipio": "Bucaramanga"
  },
  {
    "_id": "6545886d538ccff153a6c093",
    "id": 2,
    "nombre": "David",
    "apellido": "Ferrer",
    "telefono": "32021256430",
    "direccion": "avenida 102",
    "pais": "Colombia",
    "departamento": "Santander",
    "municipio": "Bucaramanga"
  },
  {
    "_id": "6545886d538ccff153a6c094",
    "id": 3,
    "nombre": "Valentina",
    "apellido": "Martinez",
    "telefono": "3202704179",
    "direccion": "calle 9",
    "pais": "Colombia",
    "departamento": "Santander",
    "municipio": "Bucaramanga"
  }
]

```

<hr>

**2.** lista todos los usuarios que han recibido paquetes.

METODO:GET
URL:http://127.10.10.07:5015/usuario/receptor

trae los siguientes datos:

```
 [
  {
    "_id": "6545886c538ccff153a6c08f",
    "id": 1,
    "nombre": "Juan",
    "apellido": "Perez",
    "telefono": "3202036410",
    "direccion": "avenida 20",
    "pais": "Colombia",
    "departamento": "Santander",
    "municipio": "Bucaramanga"
  },
  {
    "_id": "6545886c538ccff153a6c090",
    "id": 2,
    "nombre": "Marcela",
    "apellido": "Muños",
    "telefono": "32021256410",
    "direccion": "avenida 110",
    "pais": "Colombia",
    "departamento": "Santander",
    "municipio": "Bucaramanga"
  },
  {
    "_id": "6545886c538ccff153a6c091",
    "id": 3,
    "nombre": "Laura",
    "apellido": "Ramirez",
    "telefono": "3202704179",
    "direccion": "calle 50",
    "pais": "Colombia",
    "departamento": "Santander",
    "municipio": "Bucaramanga"
  }
]
```

<hr>

**3.** muestra la informacion de los paquetes con el usuario que envio y el que recibio

METODO:GET
URL:http://127.10.10.07:5015/paquetes

trae los siguientes datos:

```
  [
  {
    "_id": "6545886d538ccff153a6c095",
    "id": 1,
    "id_enviador": 1,
    "id_receptor": 1,
    "tamaño": "mediano",
    "peso": "10lb",
    "ubicacion_actual": "calle 15",
    "enviador": [
      {
        "_id": "6545886d538ccff153a6c092",
        "id": 1,
        "nombre": "Karen",
        "apellido": "Diaz",
        "telefono": "3202036410",
        "direccion": "avenida 50",
        "pais": "Colombia",
        "departamento": "Santander",
        "municipio": "Bucaramanga"
      }
    ],
    "receptor": [
      {
        "_id": "6545886c538ccff153a6c08f",
        "id": 1,
        "nombre": "Juan",
        "apellido": "Perez",
        "telefono": "3202036410",
        "direccion": "avenida 20",
        "pais": "Colombia",
        "departamento": "Santander",
        "municipio": "Bucaramanga"
      }
    ]
  },
  {
    "_id": "6545886d538ccff153a6c096",
    "id": 2,
    "id_enviador": 2,
    "id_receptor": 1,
    "tamaño": "grande",
    "peso": "40lb",
    "ubicacion_actual": "calle 45",
    "enviador": [
      {
        "_id": "6545886d538ccff153a6c093",
        "id": 2,
        "nombre": "David",
        "apellido": "Ferrer",
        "telefono": "32021256430",
        "direccion": "avenida 102",
        "pais": "Colombia",
        "departamento": "Santander",
        "municipio": "Bucaramanga"
      }
    ],
    "receptor": [
      {
        "_id": "6545886c538ccff153a6c08f",
        "id": 1,
        "nombre": "Juan",
        "apellido": "Perez",
        "telefono": "3202036410",
        "direccion": "avenida 20",
        "pais": "Colombia",
        "departamento": "Santander",
        "municipio": "Bucaramanga"
      }
    ]
  },
  {
    "_id": "6545886d538ccff153a6c097",
    "id": 1,
    "id_enviador": 1,
    "id_receptor": 3,
    "tamaño": "pequeño",
    "peso": "5lb",
    "ubicacion_actual": "calle 15",
    "enviador": [
      {
        "_id": "6545886d538ccff153a6c092",
        "id": 1,
        "nombre": "Karen",
        "apellido": "Diaz",
        "telefono": "3202036410",
        "direccion": "avenida 50",
        "pais": "Colombia",
        "departamento": "Santander",
        "municipio": "Bucaramanga"
      }
    ],
    "receptor": [
      {
        "_id": "6545886c538ccff153a6c091",
        "id": 3,
        "nombre": "Laura",
        "apellido": "Ramirez",
        "telefono": "3202704179",
        "direccion": "calle 50",
        "pais": "Colombia",
        "departamento": "Santander",
        "municipio": "Bucaramanga"
      }
    ]
  }
]
```
