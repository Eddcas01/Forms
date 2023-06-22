import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({pacientes, setPacientes}) => {

  const [nombre, setNombre] = useState('');
  const [encargado, setEncargado] = useState('');
  const [correo, setCorreo] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);




  const handleSubmit = (e) => {

    e.preventDefault()

    //VALIDACION DEL FOMRULARIO

    if ([nombre, encargado, correo, fecha, sintomas].includes('')) {

      setError(true);
      return
    }

    setError(false);

    // objeto de paciente

    const objetoPaciente = {

      nombre, 
      encargado, 
      correo, 
      fecha, 
      sintomas

    }
   //aqui copio el arreglo y el original no se modifica
    setPacientes([...pacientes,objetoPaciente]);
//metodo inmutable
    setNombre('')
    setCorreo('') //
    setEncargado('') //
    setFecha('') //
    setSintomas('') //


  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-center text-3xl" >Seguimiento pacientes</h2>
      <p className="mt-5 text-lg text-center mb-5">
        Añadir pacientes y {""}
        <span className="text-blue-500 font-bold">Administración</span>
      </p>
      <form onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

        <div className="mt-2">

          <label htmlFor="Paciente" className="block text-gray-700 uppercase font-bold ">

            Nombre del paciente </label>

          <input type="text"
            id="Paciente"
            placeholder="Nombre del paciente"
            className="border-2 w-full p-2 mt-2 placeholder-blue-500 rounded"
            value={nombre}
            //callbacks
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-2">

          <label htmlFor="encargado" className="block text-gray-700 uppercase font-bold ">

            Nombre del Encargado</label>

          <input type="text"
            id="encargado"
            placeholder="Nombre del Encargado"
            className="border-2 w-full p-2 mt-2 placeholder-blue-500 rounded"
            value={encargado}
            //callbacks
            onChange={(e) => setEncargado(e.target.value)}
          />
        </div>

        <div className="mt-2">

          <label htmlFor="correo" className="block text-gray-700 uppercase font-bold ">

            Correo</label>

          <input type="email"
            id="correo"
            placeholder="email@email.com"
            className="border-2 w-full p-2 mt-2 placeholder-blue-500 rounded"
            value={correo}
            //callbacks
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>

        <div className="mt-2">

          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold ">

            alta</label>

          <input type="date"
            id="alta"
            placeholder="date"
            className="border-2 w-full p-2 mt-2 placeholder-blue-500 rounded"
            value={fecha}
            //callbacks
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mt-2">

          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold ">

            Sintomas</label>

          <textarea id="sintomas" rows="5" className=" border-2 w-full p-2 mt-2" placeholder="Describa los sintomas"
            value={sintomas}
            //callbacks
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        
        {error &&<Error
        mensajeError = 'Debe completar todos los campos'
        />
          
          
          }
        <input type="submit"

          className="bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar Paciente"

        />
      </form>
    </div>
  )
}

export default Formulario

