
import * as React from 'react';
import * as DOM from 'react-dom';
import CustomGlobalHeader from './global/CustomGlobalHeader.tsx'
import LinkSubpageButton from './global/LinkToSubpageButton.jsx'
import GlobalFooterLinkToRepo from './global/GlobalFooterLinkToRepo.jsx'
import '../css/styles.css'

const root = document.getElementById('app');

class Main extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
          <>
          <CustomGlobalHeader title={'Wowfinder Wicki'}/>
          <main>
            <LinkSubpageButton href={'../html/CharacterClass.html'} text={'Classes'}/>
            <LinkSubpageButton href={'../html/ObjectsItems.html'} text={'Objetos'} />
          </main>
          <GlobalFooterLinkToRepo/>
        </>  
        );
    }
}

DOM.render(<Main />, root);