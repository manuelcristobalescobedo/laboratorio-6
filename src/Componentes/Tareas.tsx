import Tarea from "./Tarea"

export default function Tareas() {
    // leer tareas guardadas
    const tareasGuardadas = localStorage.getItem("tareas")
    const tareasArray = tareasGuardadas ? JSON.parse(tareasGuardadas) : []

    // convertir cada tarea de string a objeto
    const tareasObjetos = tareasArray.map((t: string) => JSON.parse(t))

    return (
        <div>
        <h1>Página de tareas</h1>
        {tareasObjetos.map((tarea: any, index: number) => (
            <Tarea key={index} tarea={tarea} />
        ))}
        </div>
    )
}