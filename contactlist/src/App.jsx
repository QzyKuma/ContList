import { useState,useEffect } from 'react'
import ContactList from './components/ContactList'
import ContactRow from './components/ContactRow';
import SelectedContact from './components/SelectedContact';
import './App.css';


function App() {
let[selectedContactId,setSelectedContactId]=useState(undefined);
  if(selectedContactId){
    return (
      <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
    )
  }
  else{
    return (
      <>
        <ContactList setSelectedContactId={setSelectedContactId} />  
      </>
    )
  }
}

export default App
