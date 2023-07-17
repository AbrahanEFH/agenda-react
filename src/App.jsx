import { useState } from "react"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"
import Header from "./components/header"


function App() {

    const [pacientes, SetPacientes] = useState([]);
 
    return (
      <div className="container mx-auto mt-20">
        <Header 
          numeros={ 1 }
        />

        <div className="mt-12 md:flex " >
            <Formulario />
            <ListadoClientes />
        </div>
      </div>
    )
}

export default App
