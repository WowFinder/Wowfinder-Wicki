import ReactDOM from 'react-dom/client'
import CustomGlobalHeader from './global/CustomGlobalHeader.jsx'
import GlobalFooter from './global/GlobalFooterLinkToRepo.jsx'
import '../css/styles.css'
import OptionListContainerToSelect from './global/OptionListContainerToSelect.jsx'
 

function ObjectsItemsApp() {
  //TODO: Add image especific class
  return (
    <>
      <CustomGlobalHeader customTitleText={'Objetos e Items'} />
      <main>
        <OptionListContainerToSelect
          optionsListEntry={[
            {Armadura:'heavyWoodenShield'},
          ]}
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
