import React from 'react'
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
          optionsListEntry={[
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
          pathSelectFile='asset-schemas/assets/Classes/'
        />
      </main>
      <GlobalFooter />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<CharacterClassApp />);

