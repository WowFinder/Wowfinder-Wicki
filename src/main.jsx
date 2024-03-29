import ReactDOM from 'react-dom/client'
import CustomGlobalHeader from './global/CustomGlobalHeader.jsx'
import LinkSubpageButton from './global/LinkToSubpageButton.jsx'
import GlobalFooterLinkToRepo from './global/GlobalFooterLinkToRepo.jsx'
import '../css/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // TODO: Factions Page
  // TODO: Races Page
  <>
    <CustomGlobalHeader customTitleText={'Wowfinder Wicki'}/>
    <main>
      <LinkSubpageButton href={'../html/CharacterClass.html'} text={'Classes'}/>
      <LinkSubpageButton href={'../html/ObjectsItems.html'} text={'Objetos'} />
    </main>
    <GlobalFooterLinkToRepo/>
  </>  
)
