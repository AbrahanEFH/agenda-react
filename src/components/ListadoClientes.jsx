import Cliente from "./Cliente"

const ListadoClientes = () => {
  return (
    <div className=" w-1/2 lg:w-3/5 " >
        <h2 className=" font-black text-3xl text-center" >Listado Clientes</h2>
        <p className=" text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className=" text-indigo-400 font-bold " >Clientes y Citas</span>
        </p>

          <Cliente />
  
    </div>
  )
}

export default ListadoClientes
