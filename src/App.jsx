import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"
import Header from "./components/header"


function App() {

 
    return (
      <div className="container mx-auto mt-20">
        <Header />

        <div className="mt-12 md:flex " >
            <Formulario />
            <ListadoClientes />
        </div>
      </div>
    )
}

export default App
