export default function Formulario() {
    function handleAgregar() {
        const idInput = (document.getElementById("id") as HTMLInputElement).value
        const nombreInput = (document.getElementById("nombre") as HTMLInputElement).value
        const listaInput = (document.getElementById("lista") as HTMLInputElement).value

        const tarea = { id: idInput, nombre: nombreInput, estado: listaInput }
        const tareaJSON = JSON.stringify(tarea)

        const tareasGuardadas = localStorage.getItem("tareas")
        const tareasArray = tareasGuardadas ? JSON.parse(tareasGuardadas) : []

        tareasArray.push(tareaJSON)
        localStorage.setItem("tareas", JSON.stringify(tareasArray))

        console.log("Tarea agregada:", tareaJSON)
    }

    return (
        <div>
        <form className="Formulario" id="Formulario">
            <h3>ID</h3>
            <h3>Nombre</h3>
            <h3>Lista</h3>
            <input id="id" type="text" placeholder="Ej: 1" />
            <input id="nombre" type="text" placeholder="Ej: Aprender a usar Mi lista de tareas" />
            <select id="lista">
                <option value="No">No</option>
                <option value="Sí">Sí</option>
            </select>
        </form>

        <button onClick={handleAgregar}>Agregar</button>
        </div>
    )
}