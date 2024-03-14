import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './global/header.jsx'
import Footer from './global/footer.jsx'
import '../css/estilos.css'
import Select from'./global/select.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header text={'Classes'}/>
    <main>
      <Select 
        nameLista={[
          'barbarian',
          'bard',
          'cleric',
          'druid',
          'fighter',
          'mage',
          'oracle',
          'rogue',
        ]}
        idName={'class'}
      />
    </main>
    <Footer/>
  </>  
)
