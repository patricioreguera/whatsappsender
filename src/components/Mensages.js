import React ,{useState}from 'react'
import "./Mensages.css"




function Mensages({formValues,setFormText,mensage}) {

    const [valor, setValor] = useState(true);

    const dihola =()=>{
        if (formValues){
            setFormText(`Hola ${formValues}, como estas?`) 

        } 
    }
    const sayHi =()=>{
        if (formValues){
            setFormText(`Hi ${formValues}, who are you today?`) 
        } 
    }


  return (
    <div className='mensages'>
        <p >{mensage}</p>
        <button 
        id='viewmore'
        onClick={()=>{valor ? setValor(!valor) : setValor(true);}} 
        >
        {valor ?  "View predefined messages": "Close" }
        </button>
        <div  className={ valor ? 'mensages-predef-off' : "mensages-predef"}>
            <button  onClick={()=>dihola()}>Hola XXX, como estas?</button>
            <button  onClick={()=>sayHi()}>Hi XXX, how are you today?</button>
        </div>
    </div>
  )
}
/* 'mensages-predef'
 */
export default Mensages