import { useState } from 'react'
import ListView from './Componants/ListView';
import AppButton from './Componants/AppButton';
import Alert from './Componants/Alert';
import './App.css'



function App() {


  const colors = ['red','green','blue','black','yellow'];
  const [alertVisable, setAlertVisibility] = useState(false);

  const clickHandle = ()=>{};
  

  return (
    <>

      <ListView itemArray={colors} heading="React with javascript" clickHandle={clickHandle} ></ListView>
      <AppButton onClick={()=>setAlertVisibility(true)}></AppButton>
      { alertVisable && <Alert onClick={()=>setAlertVisibility(false)}>This is Alert from react</Alert> }
      
     
    </>
  )
}

export default App
