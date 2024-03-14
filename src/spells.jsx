import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './global/header.jsx'
import Footer from './global/footer.jsx'
import '../css/estilos.css'
import Select from './global/select.jsx'


ReactDOM.createRoot



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header text={'Hechizos'}/>
    <main>
      <Select 
        nameLista={[
          'arcane',
          'arts',
          'celestial',
          'divine',
          'occult',
          'primal',
        ]}
        idName={'spellList'}
      />
    </main>
    <Footer/>
  </>  
)