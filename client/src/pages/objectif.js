import React from 'react';
import Nav from '../components/nav';
import ObjectifMain from '../components/objectifMain';


class Objectif extends React.Component {

    render() {
    
      return(
        <div>
            <Nav Obj/>
            <ObjectifMain />
        </div>
        
      );
    }
}
    
export default Objectif;
