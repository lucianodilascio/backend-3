import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lucianodilascio14:coderluciano@cluster0.kdcns.mongodb.net/AdoptmeBackend?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Conectado correctamente a la db"))
.catch( error => console.log("Error al conectar", error));