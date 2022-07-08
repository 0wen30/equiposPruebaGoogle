import 'dotenv/config';
import express from "express";
import * as url from 'url';
import { Ruta } from './rutas/equipos.rutas.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();

app.use(express.json());

app.use("/api",Ruta);

app.use(express.static("public"));

app.get("/admin",(req,res)=>{
    res.sendFile(__dirname + "public\\uno.html");
});

app.get("/user",(req,res)=>{
    res.sendFile(__dirname + "public\\dos.html");
});

app.get("*",(req,res)=>{
    res.sendFile(__dirname + "public\\404.html");
});

app.listen(process.env.PORT,()=>{
    console.clear();
    console.log(`Running in Port ${process.env.PORT}`)
});


