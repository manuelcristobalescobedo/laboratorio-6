// import { type Product } from "../types/Product";
// import productos from "../data/productos.json"
// import { useEffect, useState } from "react";

import { useState, useEffect } from "react"
import Tarea from "./Tarea"
import type { Tarea as TareaType } from "../Tipos/Tarea"

// function Home() {

//     const [contador, setContador] = useState(0);
//     const [hora, setHora] = useState(new Date())

export default function Tareas() {

    const [tareas, setTareas] = useState<TareaType[]>([])

    // useEffect(() => {
    //     console.log("montando componente");
    //     return () => { console.log("desmontando componente"); }
    // }, [contador])

    useEffect(() => {
        const tareasGuardadas = localStorage.getItem("tareas")
        if (tareasGuardadas) {
            const tareasArray: TareaType[] = JSON.parse(tareasGuardadas)
            setTareas(tareasArray)
        }
    }, [])

    // listaProductos.map((producto) => {
    //     return (

    //         <li key={producto.id}> {producto.nombre} - {producto.stock} -  {producto.uuid}</li>
    //     )
    // })

    return (
        <div>
            <h1>Página de tareas</h1>
            {tareas.map((tarea) => (
                <Tarea key={tarea.numero} tarea={tarea} tareas={tareas} setTareas={setTareas} 
                />
            ))}
        </div>
    )
}