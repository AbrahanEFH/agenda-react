import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"
import Header from "./components/header"


function App() {

 
    return (
      <div className="container mx-auto mt-20">
        <Header />
        <Formulario />
        <ListadoClientes />
      </div>
    )
}

export default App
