import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import message from './notify/Notify'

// Call it once in your app. At the root of your app is the best place
toast.configure()

const App = () => {
  const notify = () => {
    toast.success("Wow so easy !");
    message.susscess('Este es mi mensaje')
  }

  return <button onClick={notify}>Notify !</button>;
}
export default App;
