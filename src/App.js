import './App.css';
import { useState , useEffect } from 'react';
import ClientForm from './components/ClientForm';
import ClientList from './components/ClientList';


const clientListDemo = [
  {
    id: 1,
    name: "Patricio",
    phone: "34 605 37 35 37",
    text: "Hi Patricio, who are you today?",
    Sent: false
  },
  {
    id: 2,
    name: "Demo Name",
    phone: "605 37 35 37",
    text: "Example mensage sent",
    Sent: true
  }
]


function App() {
    const [clientList,setClientList] = useState(clientListDemo)
    const [editClientList, setEditClientList] = useState (null)




    /* ADD CLIENT TO THE LIST*/
      const addClientList =(client,phone,text)=>{
        const newClient = {
          id: Date.now(),
          name: client,
          phone: phone,
          text: text,
          Sent: false
        }
        const newclientList = [newClient, ...clientList]
        setClientList(newclientList)
      }

    /*DELETE CLIENT TO THE LIST*/
    const deleteClient = (id)=>{
      const newclientList = clientList.filter( client => client.id !== id)
      setClientList(newclientList)
    }



    /*UPDATE CLIENT TO THE LIST*/
      const updateClient =(id,name,phone,text)=>{
      const newClientList = clientList.map (client => {
        if(client.id === id){
          client.name = name ;
          client.phone = phone ;
          client.text = text;
        }
      return client
    })
    setClientList(newClientList)
    setEditClientList(null)
    }

    /*EFECTO SCROLL PARA EDITAR*/
    useEffect(() => {
      
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
    },[editClientList])


    /*FUNCTION TO SEND WHATSAPP*/

    const sendWhatsapp =(id,phone, text,sent)=>{
        const newClientList = clientList.map (client => {
          if(client.id === id){
            client.Sent = true;
          }
          return client;
        })
        setClientList(newClientList)
        window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`);
      }




  return (
    <div className="App"> 

        <ClientForm 
          addClientList = {addClientList}
          editClientList =  {editClientList}
          updateClient ={updateClient}
        />

      <div className='client-list'>
        <ClientList 
            clientList = {clientList}
            deleteClient = {deleteClient}
            updateClient ={updateClient}
            setEditClientList ={setEditClientList}
            sendWhatsapp={sendWhatsapp}  
        />
      </div>

    </div>
  );
}

export default App;
