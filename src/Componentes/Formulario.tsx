// import { useState } from "react";
// import type { User } from "../types/User";

import { useState } from "react"
import type { Tarea } from "../Tipos/Tarea"

// function Login() {

//     const InitialState: User = {
//         username: "",
//         loginDate: new Date(),
//         mail: ""
//     }

export default function Formulario() {

    const initialTarea: Tarea = {
        numero: 0,
        nombre: "",
        estado: false,
    }

    // const [user, setUser] = useState<User>(InitialState)

    const [tarea, setTarea] = useState<Tarea>(initialTarea)

    // function handleInitSession() {
    //     localStorage.setItem("randomNumber", Math.random().toLocaleString());

    //     localStorage.setItem("login", JSON.stringify({
    //         username: "cmd",
    //         loginDate: new Date(),
    //         mail: "carlosmarind@gmail.com"
    //     }));
    // }

    function handleAgregar() {
        const tareasGuardadas = localStorage.getItem("tareas")
        const tareasArray: Tarea[] = tareasGuardadas ? JSON.parse(tareasGuardadas) : []

        tareasArray.push(tarea)
        localStorage.setItem("tareas", JSON.stringify(tareasArray))

        setTarea(initialTarea)
    }

    // function handleSearch() {
    //     const login = localStorage.getItem("login")
    //     if (login) {
    //         const objetoJs: User = JSON.parse(login) as User;
    //         setUser(objetoJs);
    //     } else {
    //         setUser(InitialState);
    //     }
    // }

    function actualizarNumero(valor: number) {
        setTarea({ numero: valor, nombre: tarea.nombre, estado: tarea.estado })
    }

    function actualizarNombre(valor: string) {
        setTarea({ numero: tarea.numero, nombre: valor, estado: tarea.estado })
    }

    function actualizarEstado(valor: boolean) {
        setTarea({ numero: tarea.numero, nombre: tarea.nombre, estado: valor })
    }

    // return (
    //     <div>
    //         <h2>Pagina de Login {user.username}</h2>
    //         <div>
    //             <button onClick={handleInitSession}>Iniciar Sesion</button>
    //             <button onClick={handleLogout}>Cerrar Sesion</button>
    //             <button onClick={handleClean}>Limpiar Sesion</button>
    //             <button onClick={handleSearch}>Buscar Sesion</button>
    //         </div>
    //     </div>
    // )

    return (
        <div>
            <form className="Formulario">
                <h3>Número</h3>
                <h3>Nombre</h3>
                <h3>Estado</h3>
                <input id="numero" type="number" placeholder="Ej: 1" value={tarea.numero} onChange={(e) => actualizarNumero(Number(e.target.value))}/>
                <input id="nombre" type="text" placeholder="Ej: Entregar la tarea Laboratorio 5" value={tarea.nombre} onChange={(e) => actualizarNombre(e.target.value)}/>
                <select id="estado" value={tarea.estado ? "true" : "false"} onChange={(e) => actualizarEstado(e.target.value === "true")}>
                    <option value="true">Lista</option>
                    <option value="false">Pendiente</option>
                </select>
            </form>

            <button onClick={handleAgregar}>Agregar</button>
        </div>
    )
}