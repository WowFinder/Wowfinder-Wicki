import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import Footer from './footer.jsx'
import '../css/estilos.css'
import Select from'./global/select.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header text={'Classes'}/>
    <main>
      <ClassComponent />
    </main>
    <Footer/>
  </>  
)
