import React from 'react'
import Clients from './Clients'

function ClientList({clientList,deleteClient,updateClient, setEditClientList,sendWhatsapp}) {
  return (clientList.map ( client => 
    <Clients 
    key = {client.id}
    client = {client}
    deleteClient ={deleteClient}
    updateClient ={updateClient}
    setEditClientList ={setEditClientList}
    sendWhatsapp={sendWhatsapp}
  
    />
  )
   
  )
}

export default ClientList


