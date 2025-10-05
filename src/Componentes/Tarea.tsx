import type { Tarea } from "../Tipos/Tarea"

type Props = {
    tarea: Tarea
    tareas: Tarea[]
    setTareas: React.Dispatch<React.SetStateAction<Tarea[]>>
}

export default function Tarea({ tarea, tareas, setTareas }: Props) {
    function handleEliminar() {
        const nuevasTareas: Tarea[] = []

        for (let i = 0; i < tareas.length; i++) {
            const t = tareas[i]

            if (t.numero !== tarea.numero) {
                nuevasTareas.push(t)
            }
        }

        localStorage.setItem("tareas", JSON.stringify(nuevasTareas))

        setTareas(nuevasTareas)
    }

    function handleCambiarEstado(e: React.ChangeEvent<HTMLSelectElement>) {
        const nuevoEstado = e.target.value === "true"
        const nuevasTareas: Tarea[] = []

        for (let i = 0; i < tareas.length; i++) {
            const t = tareas[i]

            if (t.numero === tarea.numero) {
                nuevasTareas.push({
                    numero: t.numero,
                    nombre: t.nombre,
                    estado: nuevoEstado,
                })
            } else {
                nuevasTareas.push(t)
            }
        }

        localStorage.setItem("tareas", JSON.stringify(nuevasTareas))

        setTareas(nuevasTareas)
    }

    return (
        <div className="Tarea">
            <h3>Número</h3>
            <h3>Nombre</h3>
            <h3>Estado</h3>
            <button onClick={handleEliminar}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.11292 14.6107L5.40625 13.8871L9.27646 10L5.40625 6.11295L6.11292 5.3894L10 9.27649L13.8871 5.3894L14.5938 6.11295L10.7235 10L14.5938 13.8871L13.8871 14.6107L10 10.7236L6.11292 14.6107Z" fill="white"/>
                </svg>
            </button>
            <p>{tarea.numero}</p>
            <p>{tarea.nombre}</p>
            <select value={tarea.estado ? "true" : "false"} onChange={handleCambiarEstado}>
                <option value="true">Lista</option>
                <option value="false">Pendiente</option>
            </select>
        </div>
    )
}