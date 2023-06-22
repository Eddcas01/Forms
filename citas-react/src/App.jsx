import { useState } from "react"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Header2 from "./components/Header2"

function App() {
 
  const [pacientes, setPacientes] = useState([]);

  
  //vacios cuando llegan al formulario

  return (
    
    <div className="container mx-auto">

     <Header2
     
   
     
     />
     <div className="mt-12 md:flex">
     <Formulario
   pacientes={pacientes}
  setPacientes={setPacientes}      
     />
     <ListadoPacientes/>
     </div>
    </div>
  )
}

export default App
