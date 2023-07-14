
const Cliente = () => {
  return (
     <div className=" m-5 bg-white shadow-md px-5 py-5 rounded-xl">
        <p className=" font-bold mb-3 text-gray-700 uppercase"> Nombre: {''}
            <span className=" font-normal normal-case">Cliente</span>

        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase"> Apellido: {''}
            <span className=" font-normal normal-case">Clientazo</span>

        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase"> Email: {''}
            <span className=" font-normal normal-case">correo@correo.co</span>

        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase"> Fecha: {''}
            <span className=" font-normal normal-case">10-10-23</span>

        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase"> Servicio: {''}
            <span className=" font-normal normal-case">Hidratacion y alisado</span>

        </p>
    </div>
  )
}

export default Cliente
