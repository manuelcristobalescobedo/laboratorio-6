export default function Tarea({ tarea }: any) {
    function handleEliminar() {
        // obtener las tareas guardadas
        const tareasGuardadas = localStorage.getItem("tareas")
        const tareasArray = tareasGuardadas ? JSON.parse(tareasGuardadas) : []

        // convertir cada string JSON a objeto
        const tareasObjetos = tareasArray.map((t: string) => JSON.parse(t))

        // filtrar las tareas que no coincidan con el id de esta tarjeta
        const nuevasTareas = tareasObjetos.filter((t: any) => t.id !== tarea.id)

        // volver a guardarlas como strings JSON
        const nuevasTareasJSON = nuevasTareas.map((t: any) => JSON.stringify(t))
        localStorage.setItem("tareas", JSON.stringify(nuevasTareasJSON))

        // recargar la página (versión principiante)
        window.location.reload()
    }

    function handleCambiarEstado(e: React.ChangeEvent<HTMLSelectElement>) {
        const nuevoEstado = e.target.value

        // obtener tareas guardadas
        const tareasGuardadas = localStorage.getItem("tareas")
        const tareasArray = tareasGuardadas ? JSON.parse(tareasGuardadas) : []

        // convertir strings JSON a objetos
        const tareasObjetos = tareasArray.map((t: string) => JSON.parse(t))

        // actualizar solo la tarea con el mismo id
        const nuevasTareas = tareasObjetos.map((t: any) => {
            if (t.id === tarea.id) {
                return { ...t, estado: nuevoEstado }
            }
            return t
        })

        // volver a guardar como strings JSON
        const nuevasTareasJSON = nuevasTareas.map((t: any) => JSON.stringify(t))
        localStorage.setItem("tareas", JSON.stringify(nuevasTareasJSON))

        // recargar para que se vea el cambio (básico)
        window.location.reload()
    }

    return (
        <div className="Tarea">
            <h3>ID</h3>
            <h3>Nombre</h3>
            <h3>Lista</h3>
            <button onClick={handleEliminar}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.11292 14.6107L5.40625 13.8871L9.27646 10L5.40625 6.11295L6.11292 5.3894L10 9.27649L13.8871 5.3894L14.5938 6.11295L10.7235 10L14.5938 13.8871L13.8871 14.6107L10 10.7236L6.11292 14.6107Z" fill="white"/>
                </svg>
            </button>
            <p>{tarea.id}</p>
            <p>{tarea.nombre}</p>
            <select value={tarea.estado} onChange={handleCambiarEstado}>
                <option value="Sí">Sí</option>
                <option value="No">No</option>
            </select>
        </div>
    )
}