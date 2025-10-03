import { Link } from "react-router-dom"
import Rutas from "./Rutas"

export default function App() {
    return (
        <div className="Aplicacion">
            <aside>
                <h2>Mi lista de tareas</h2>
                <nav>
                    <Link to="/">Principal</Link>
                    <Link to="/tareas">Tareas</Link>
                    <Link to="/tareas/nueva">Nueva tarea</Link>
                </nav>
            </aside>
            <main>
                <Rutas />
            </main>
        </div>
    )
}