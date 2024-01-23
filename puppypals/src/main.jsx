import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//Don't touch this!!! This is how React will work. React DOM will inject react files in src and inject them into the DOM. App.jsx is our application, so we'll inject that. ReactDOM means to grab our root reference from the DOM and renders the code and injects it into the container. At the root, we're going to add a child root called 'the App'. The container is the div in the HTML. With React, it's a developers tool that makes frontend developement easier and puts all three files (HTML, CSS, and Javascript) into 1 file. i.e. Assets folder. Top Level of the Root is outside of the source folder (i.e. index.html, README.md, etc)