
import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login/Login";
import SignUp from './pages/signUp/signUp';

import './index.css';

const routes = (


  <Router>
    <Routes>
      <Route path='/dashboard' exact element={<Home />} />

      <Route path='/login' exact element={<Login />} />

      <Route path='/signUp' exact element={<SignUp />} />



    </Routes>


  </Router>
)

const App = () => {
  return (

    <div>{routes}</div>
  )
}

export default App