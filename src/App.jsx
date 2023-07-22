import { useState } from "react"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"
import Header from "./components/header"


function App() {

    const [clientes, setClientes] = useState([]);

 
    return (
      <div className="container mx-auto mt-20">
        <Header />

        <div className="mt-12 md:flex " >
            <Formulario 
                clientes={clientes}
                setClientes={setClientes}
            />
            <ListadoClientes 
              clientes={clientes}
            />
        </div>
      </div>
    )
}

export default App
