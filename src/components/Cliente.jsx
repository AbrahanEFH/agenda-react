
const Cliente = ({cliente}) => {

    const { nombre, apellido, email, cita, servicio } = cliente

  return (
     <div className=" my-8 mx-5 bg-white shadow-md px-5 py-5 rounded-xl">
        <p className=" font-bold mb-3 text-gray-700 uppercase"> Nombre: {''}
            <span className=" font-normal normal-case">{nombre}</span>

        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase"> Apellido: {''}
            <span className=" font-normal normal-case">{apellido}</span>

        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase"> Email: {''}
            <span className=" font-normal normal-case">{email}</span>

        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase"> Fecha: {''}
            <span className=" font-normal normal-case">{cita}</span>

        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase"> Servicio: {''}
            <span className=" font-normal normal-case">{servicio}</span>

        </p>
    </div>
  )
}

export default Cliente
