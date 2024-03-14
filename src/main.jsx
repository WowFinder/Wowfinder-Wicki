import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './global/header.jsx'
import LinkPage from './global/linkPageButton.jsx'
import Footer from './global/footer.jsx'
import '../css/estilos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header text={'Wowfinder Wicki'}/>
    <main>
      <LinkPage href={'../html/Class.html'} text={'Classes'}/>
      <LinkPage href={'../html/spells.html'} text={'Spells'}/>
    </main>
    <Footer/>
  </>  
)
