import React, {useState, useEffect} from 'react'
import Mensages from './Mensages'
import Logo from "../images/logo.svg"

const mensajeInicio = "Enter the data, then write a message or select a preset message 👇"

function ClientForm( {addClientList,editClientList,updateClient}) {
    const [formValues,setFormValues] = useState("")
    const [formNumber,setFormNumber] = useState ("")
    const [formText,setFormText] = useState ("")
    const [mensage, setMensage] = useState(mensajeInicio)

    useEffect (()=>{

        if (editClientList){
            setFormValues(editClientList.name)
            setFormNumber(editClientList.phone)
            setFormText(editClientList.text)
        }

    },[editClientList])



    const handleSubmit = (event)=> {
        event.preventDefault()
        if (formValues.length === 0 || formNumber.length === 0 ){
            setMensage("You must enter a Name and a Telephone")
            
        }else {

            if (editClientList){
                updateClient(editClientList.id,formValues,formNumber,formText)
                setMensage("")
                setFormValues("")
                setFormNumber("")
                setFormText("")
            }else {
                addClientList(formValues, formNumber,formText)
                setFormValues("")
                setFormNumber("")
                setFormText("")
                setMensage("")
            }
        }

    }
    /* CAPTURA VALORES INPUT*/
    const handleImput = (event)=> {
        
        setFormValues(event.target.value)
    }

    const handleNumber =(event) =>{
        setFormNumber(event.target.value)
    }

    const handleText =(event)=>{
        setFormText(event.target.value)
    }

  return (
    <>
        <form className='form-conteiner' onSubmit={handleSubmit}>
            <div className='header'>
                <img className='logo' src={Logo} alt="logo"/>
                <h1>Whatsapp</h1>
                <h6>Sender</h6>
            </div>

            <div className='form-name-phone'>
                <input onChange={handleImput}  type="text" placeholder="Enter a Name" value={formValues} />
                <input onChange={handleNumber} type="text" placeholder="Enter a Phone Number" value={formNumber}/>
            </div>
            <div className='form-inputtext-button'>
                <input id='text-input' onChange={handleText} type="text" placeholder="Enter a Mensage" value={formText}/>
                <button
                className={editClientList ? "button-send-inactive" : "button-send-active"}
                >
                    {editClientList ? "Save and Close" : "Add Whatsapp"}
                </button>

            </div>

        </form>  
        <Mensages 
            formValues={formValues}
            setFormText={setFormText}
            mensage ={mensage}
            setMensage={setMensage}
        />
    </>
  )
}

export default ClientForm