import { useState, useEffect } from "react"
import Tarea from "./Tarea"
import type { Tarea as TareaType } from "../Tipos/Tarea"

export default function Tareas() {
    const [tareas, setTareas] = useState<TareaType[]>([])

    useEffect(() => {
        const tareasGuardadas = localStorage.getItem("tareas")
        if (tareasGuardadas) {
            const tareasArray: TareaType[] = JSON.parse(tareasGuardadas)
            setTareas(tareasArray)
        }
    }, [])

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