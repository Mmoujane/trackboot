import React from "react";
import Nav from "../components/nav";
import Recomm from "../components/recommMain";




class Recommandation extends React.Component {

    render(){

        return(

            <div>
                <Nav Rec/>
                <Recomm />
            </div>
        );
    }
}

export default Recommandation;