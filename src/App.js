import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import message from './notify/Notify'

// Call it once in your app. At the root of your app is the best place
toast.configure()
const App = () => {
  const notify = () => {
    // toast.success("Wow so easy !");
    message.susscess('Este es mi success', { position: 'top-center' })

  }
  const warning = () => {
    message.warning('Este es mi warning')
  }
  const error = () => {
    message.error('Este es mi error')
  }

  return (<>
    <button onClick={notify}>sucs !</button>
    <button onClick={warning}>war !</button>
    <button onClick={error}>error !</button>
  </>
  )
}
export default App;
