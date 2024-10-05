import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
display: none;
@media (max-width: 768px) {
position: fixed;
left: 0;
top: 0;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
width: ${props => props.$show ? "50%" : "0"};
height: 100vh;
background-color: #26282B;
z-index: 5;
transition: width 1s;
  }
`;

const Brand = styled.div`
width: ${props => props.$show ? "100%" : "0"};
transition: width 1s, opacity 500ms;
opacity: ${props => props.$show ? "1" : "0"};
height: 10%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
padding: 0.7rem;
`;

const FirstPart = styled.span`
color: #D82626;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const SecondPart = styled(FirstPart)`
color: #FFFFFF;
`;

const LinksContainer = styled.div`
height: 50%;
width: ${props => props.$show ? "100%" : "0"};
opacity: ${props => props.$show ? "1" : "0"};
transition: width 1s, opacity 500ms;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Link = styled.a`
font-size: calc(1vw + 0.6rem);
width: 80%;
opacity: 1;
color: ${(props) => props.$LinkColor ? '#FFFFFF' : '#C4CFDE'};
text-decoration: none;
font-style: normal;
font-weight: 400;
line-height: normal;
padding: 1rem 0 1rem 0;
cursor: pointer;
transition: color 1s;
&:hover{
    color: white;
}
`;


class Sidebar extends React.Component {

    render(){
        return(
            <Container $show={this.props.show}>
                <Brand $show={this.props.show}>
                    <FirstPart>Track</FirstPart>
                    <SecondPart>Bot</SecondPart>
                </Brand>
                <LinksContainer $show={this.props.show}>
                    <Link $LinkColor={this.props.Ent} href='/'>entraînement</Link>
                    <Link $LinkColor={this.props.Obj} href='/objectif'>objectif</Link>
                    <Link $LinkColor={this.props.Avan} href='/avancement'>avancement</Link>
                    <Link $LinkColor={this.props.Rec} href='/recommandation'>recommandation</Link>
                </LinksContainer>
            </Container>
        );
    }
}

export default Sidebar;