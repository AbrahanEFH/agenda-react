import {useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ clientes, setClientes, cliente }) => {
    //Primer State
    const [nombre, setNombre] = useState(''); // valor inicial
    const [apellido, setApellido] = useState(''); 
    const [email, setEmail] = useState(''); // valor inicial
    const [cita, setCita] = useState(''); // valor inicial
    const [servicio, setServicio] = useState(''); 

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(cliente).length > 0){
            setNombre(cliente.nombre)
            setApellido(cliente.apellido)
            setEmail(cliente.email)
            setCita(cliente.cita)
            setServicio(cliente.servicio)

        } 
    }, [cliente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }


    // Funcion para enviar el formulario

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacion del formulario
        if([ nombre, apellido, email, cita, servicio].includes('') ){
            console.log('Hay almenos un campo vacio')
            setError(true)
            return;
        }

        setError(false)

        //Objeto de cliente
        const objetoClientes = {
            nombre,
            apellido,
            email,
            cita,
            servicio,
            id: generarId()
        }

        if(cliente.id ) {
            // Editando el Registro
        } else {
            // Nuevo Registro
            objetoClientes.id = generarId()
            setClientes([...clientes, objetoClientes])
        }

        // Reiniciar el formulario
        setNombre('')
        setApellido('')
        setEmail('')
        setCita('')
        setServicio('')
    }

   

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5" >
        <h2 className="font-black text-3xl text-center" >Seguimiento Clientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade clientes y {' '}
            <span className=" text-indigo-400 font-bold" >Administralos</span>
        </p>

        <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                {error && <Error> <p> Todos los campos son obligatorios</p> </Error>}
            <div className=" mb-5" >
                <label htmlFor="cliente" className=" block text-gray-700 uppercase font-bold">
                    Nombre Cliente
                </label>

                <input
                    id="cliente"
                    type="text" 
                    placeholder="Nombre Cliente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    // Utilizamos el hook y la funcion Modificadora [nombre, setNombre]
                    value={nombre}
                    onChange={ (e) => setNombre(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="apellido" className=" block text-gray-700 uppercase font-bold">
                    Apellido cliente
                </label>

                <input
                    id="apellido"
                    type="text" 
                    placeholder="Apellido Cliente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={apellido}
                    onChange={ (e) => setApellido(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className=" block text-gray-700 uppercase font-bold">
                    Email
                </label>

                <input
                    id="email"
                    type="email" 
                    placeholder="Email Contacto"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="cita" className=" block text-gray-700 uppercase font-bold">
                    Cita
                </label>

                <input
                    id="cita"
                    type="date" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={cita}
                    onChange={ (e) => setCita(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="servicio" className=" block text-gray-700 uppercase font-bold">
                    Servicio
                </label>
                <textarea 
                    id="servicio"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe lo que necesitas"
                    value={servicio}
                    onChange={ (e) => setServicio(e.target.value)}
                />
            </div>
            <input type="submit" 
                    className="bg-indigo-400 w-full rounded p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
                    value={ cliente.id ? 'Editar Cliente' : 'Agregar Cliente' }
            
            />
        </form>
    </div>
  )
}

export default Formulario

