import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './Login';
import SignupForm from './Signup';
import WelcomePage from './Welcome';
import WeatherApp from './Weather';
export default class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
            <Routes>
                <Route path='/' element={<WelcomePage/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/signup' element={<SignupForm/>}/>
                <Route path='/weather' element={<WeatherApp/>}/>

            </Routes>
        </Router>


      </div>
    )
  }
}

