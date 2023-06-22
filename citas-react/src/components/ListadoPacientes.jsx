import PacienteComp from "./PacienteComp"

const ListadoPacientes = () => {
  return (
    <div className="md:dw-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

      <p className="text-xl mt-5 mb-5 text-center">
        Administra tus {' '}
        <span className="text-indigo-600 font-bold"> Pacientes y citas</span>
      </p>

 <PacienteComp/>
 <PacienteComp/>
 <PacienteComp/>

    </div>
  )
}

export default ListadoPacientes