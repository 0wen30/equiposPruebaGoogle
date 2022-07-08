import { request, response } from "express";
import { conectar } from "../database/conexion.js";

export const obtenerEquipos = async(req = request, res = response) => {
    console.log("vamos a devolver los equipos");
    const db = await conectar();
    const resultado = await db.collection('equipos').find({}).toArray();
    console.log(resultado);
    res.json(resultado);
}

export const obtenerEquipo = (req = request, res = response) => {
    console.log("vamos a devolver solo un equipo");
    const equipo = equipos.find(eq=>eq.nombre.toLowerCase()===req.params.nombre.trim().toLowerCase());
    console.log(equipo)
    res.json(equipo)
}

export const insertarEquipo = async(req = request, res = response) => {
    console.log("vamos a insertar los equipos:");
    console.log(req.body);
    const db = await conectar();
    const resultado = await db.collection('equipos').insertOne(req.body);
    res.json(resultado);
}

export const modificarEquipo = (req = request, res = response) => {
    console.log("vamos a modificar un equipo");
    console.log(req.params);
    res.end();
}

export const eliminarEquipo = (req = request, res = response) => {
    console.log("vamos a eliminar un equipo");
    console.log(req.params);
    res.end();
}


