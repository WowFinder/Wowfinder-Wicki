import ReactDOM from 'react-dom/client'
import CustomGlobalHeader from './global/CustomGlobalHeader.js'
import GlobalFooter from './global/GlobalFooterLinkToRepo.jsx'
import '../css/styles.css'
import OptionListContainerToSelect from './global/OptionListContainerToSelect.jsx'
import React from 'react'
 

function ObjectsItemsApp() {
  return (
    <>
      <CustomGlobalHeader title={'Objetos e Items'} />
      <main>
        <OptionListContainerToSelect
          optionsListEntry={
            {Armadura:'heavyWoodenShield'}
          }
          defultValue={'heavyWoodenShield'}
          fileKeywordList={['$type']}
          idName='class'
          pathSelectFile='asset-schemas/raw-assets/Items/gear/common/armour/'
        />
      </main>
      <GlobalFooter />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<ObjectsItemsApp />);
