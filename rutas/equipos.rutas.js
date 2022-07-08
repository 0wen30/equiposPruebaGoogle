import { Router } from "express";
import { eliminarEquipo, insertarEquipo, modificarEquipo, obtenerEquipo, obtenerEquipos } from "../controladores/equipos.controlador.js";

export const Ruta = Router();

Ruta.get("/equipos",obtenerEquipos);

Ruta.get("/equipo/:nombre",obtenerEquipo);

Ruta.post("/equipos",insertarEquipo);

Ruta.put("/equipo/modificar/:equipo",modificarEquipo);

Ruta.delete("/equipo/eliminar/:equipo",eliminarEquipo);

