import Cliente from "./Cliente"
import { useEffect } from "react"

const ListadoClientes = ({clientes, setCliente }) => {

       useEffect(() => {
        if(clientes.length > 0){
          console.log('Imprimiendo nuevo paciente')

        }
      }, [clientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll " >

        {clientes && clientes.length ? (
          <>
        <h2 className=" font-black text-3xl text-center" >Listado Clientes</h2>
        <p className=" text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className=" text-indigo-400 font-bold " >Clientes y Citas</span>
        </p>

          { clientes.map( (cliente) => (
               <Cliente
                    key={cliente.id}
                    cliente={cliente}
                    setCliente={setCliente}
               />
                  
          ))}
        </>
          
        ) : (
          <>
                  <h2 className=" font-black text-3xl text-center" >No hay Clientes</h2>
                     <p className=" text-xl mt-5 mb-10 text-center">
                      Agrega clientes {''}
                 <span className=" text-indigo-400 font-bold " >y administralos en este lugar</span>
        </p>

          </>
        )}

        
    </div>
  )
}

export default ListadoClientes
