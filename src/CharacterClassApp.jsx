import ReactDOM from 'react-dom/client'
import CustomGlobalHeader from './global/CustomGlobalHeader.jsx'
import GlobalFooter from './global/GlobalFooterLinkToRepo.jsx'
import '../css/styles.css'
import OptionListContainerToSelect from './global/OptionListContainerToSelect.jsx'
 

function CharacterClassApp() {
     return (
    <>
      <CustomGlobalHeader customTitleText={'Classes'} />
      <main>
        <OptionListContainerToSelect
          defultValue={'barbarian'}
          optionsListEntry={{  
            Barbaro:'barbarian',
            Bardo:'bard',
            Clerigo:'cleric',
            Druida: 'druid',
            Guerrero:'fighter',
            Mago:'mage',
            Oraculo:'oracle',
            Picaro:'rogue',
          }}
          fileKeywordList={['key', 'maxLevel', 'hitDie']}
          idName='class'
          pathSelectFile='/asset-schemas/raw-assets/Classes/'
        />
      </main>
      <GlobalFooter />
    </>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<CharacterClassApp />, rootElement);
