import React from 'react'
import ReactDOM from 'react-dom/client'
import CustomGlobalHeader from './global/CustomGlobalHeader.jsx'
import LinkSubpageButton from './global/LinkToSubpageButton.jsx'
import GlobalFooterLinkToRepo from './global/GlobalFooterLinkToRepo.jsx'
import '../css/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CustomGlobalHeader customTitleText={'Wowfinder Wicki'}/>
    <main>
      <LinkSubpageButton href={'../html/CharacterClass.html'} text={'Classes'}/>
    </main>
    <GlobalFooterLinkToRepo/>
  </>  
)
