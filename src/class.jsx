import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './global/header.jsx'
import Footer from './global/footer.jsx'
import '../css/estilos.css'
import Select from './global/select.jsx'

function App() {
  return (
    <>
      <Header text={'Classes'} />
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
          idName='class'
          fileName='asset-schemas/assets/Classes/'
        />
      </main>
      <Footer />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);

