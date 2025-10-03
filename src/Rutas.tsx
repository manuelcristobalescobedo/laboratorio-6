// Importamos los componentes Routes y Route de React Router
// Importamos los componentes Principal, Tareas y NuevaTarea del directorio Paginas
import { Routes, Route } from "react-router-dom"
import Principal from "./Componentes/Principal"
import Tareas from "./Componentes/Tareas"
import NuevaTarea from "./Componentes/NuevaTarea"

export default function Rutas() {
    return (
        <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/tareas" element={<Tareas />} />
            <Route path="/tareas/nueva" element={<NuevaTarea />} />
        </Routes>
    )
}