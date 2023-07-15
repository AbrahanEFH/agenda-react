import {useState, useEffect } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState(''); // valor inicial

   

  return (
    <div className="md:w-1/2 lg:w-2/5 " >
        <h2 className="font-black text-3xl text-center" >Seguimiento Clientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade clientes y {' '}
            <span className=" text-indigo-400 font-bold" >Administralos</span>
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            <div className=" mb-5" >
                <label htmlFor="cliente" className=" block text-gray-700 uppercase font-bold">
                    Nombre Cliente
                </label>

                <input
                    id="cliente"
                    type="text" 
                    placeholder="Nombre Cliente"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
                />
            </div>
            <input type="submit" 
                    className="bg-indigo-400 w-full rounded p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
                    value="Solicitar Cita"
            
            />
        </form>
    </div>
  )
}

export default Formulario

