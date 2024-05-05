import { useState } from 'react'
import './App.css'
import Modal from './Modal';

function App() {

  const [showModalPopup,setShowModalPopup]=useState(false);
  
  function handleModalToggle(){
    setShowModalPopup(!showModalPopup);
  }

  function onClose(){
    setShowModalPopup(false);
  }

  return (
   <div className='w-full flex p-5 flex-col'>
      <button onClick={handleModalToggle} className='bg-purple-600 text-white p-4 rounded-md text-3xl'>Open Modal</button>
      <div className='flex justify-center'>
      {
        showModalPopup && <Modal onClose={onClose} body={<div>Custom Body Bro!!!!!</div>}/>
      }
      </div>
   </div>
  )
}

export default App
