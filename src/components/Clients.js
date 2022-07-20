import React from 'react'

function Clients({client,deleteClient,setEditClientList,sendWhatsapp}) {



  return (
    <div className="client">
       <div className='client-name-phone'>
          <h4 >{client.name.toUpperCase()}</h4>
          <h5> Tel: {client.phone}</h5>
       </div>
       <p>{client.text}</p>
       <div className='clients-butons'>
         <button id='delete-btn' onClick={()=>deleteClient(client.id)}>DELETE</button>
         <button id='edit-btn' onClick={()=> setEditClientList(client)}>EDIT</button>
         <button 
            id='send-btn'
            className={client.Sent ? "send-inactive" : "send-active"}
            onClick={()=>sendWhatsapp(client.id,client.phone, client.text, client.Sent)}
          >{client.Sent ? "SENT" : "SEND"}</button>
        </div>
    </div>
               
  )
  
}

export default Clients