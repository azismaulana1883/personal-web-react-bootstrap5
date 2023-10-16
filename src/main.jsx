import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import About from './About'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
