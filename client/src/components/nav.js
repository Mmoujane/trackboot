import React from 'react'
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import Sidebar from './slide';


const NavContainer = Styled.div`
width: 100%;
height: 7vh;
display: flex;
padding: 0.5rem;
align-items: center;
justify-content: center;
position: fixed;
top: 0;
right: 0;
z-index: 4;
background: ${props => props.$something ? 'rgba(235, 240, 242,.871)' : 'transparent'};
backdrop-filter: ${props => props.$something ? 'blur(15px)' : 'blur(0px)'};

`;

const Brand = Styled.div`
display: flex;
justify-content : center;
align-items: center;
height: 100%;
`;

const FirstPart = Styled.span`
color: #4A8CFF;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
`;

const SecondPart = Styled(FirstPart)`
color: black;
`;

const Link = Styled.a`
text-decoration: none;
width: 20%;
color: ${(props) => props.$LinkColor ? '#4A8CFF' : 'black'};
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;
transition: color 1s;
&:hover{
    color: #4A8CFF;
}
`;

const LinkContainer = Styled.div`
width: 60%;
display: flex;
height: 100%;
justify-content: space-between;
align-items: center;
@media (max-width: 768px) {
    display: none;
  }
`;

const Container = Styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
`;

const BarContainer = Styled.span`
@media (max-width: 768px) {
    color: #D82626;
    display: block;
  }

display: none;

`;



class Nav extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            click: false,
            toogle: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.BackgroundColor, true)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.BackgroundColor)
    }

    BackgroundColor = () => {
        const ColorState = document.documentElement.scrollTop > 50 ? true : false;
        this.setState({ toogle : ColorState });
        
    }

    handleClick = () => {
        this.setState({ click : !(this.state.click) });
    }

    render(){
        return(
            <div>
                <NavContainer $something={this.state.toogle}>
                <Container>
                    <Brand>
                        <FirstPart>Track</FirstPart>
                        <SecondPart>Bot</SecondPart>
                    </Brand>
                    <BarContainer>
                        <FontAwesomeIcon icon={faBars} style={{fontSize: '25px', cursor: 'pointer'}} onClick={() => this.handleClick()}/>
                    </BarContainer>
                    <LinkContainer>
                        <Link $LinkColor={this.props.Ent} href='/'>entraînement</Link>
                        <Link $LinkColor={this.props.Obj} href='/objectif'>objectif</Link>
                        <Link $LinkColor={this.props.Avan} href='/avancement'>avancement</Link>
                        <Link $LinkColor={this.props.Rec} href='/recommandation'>recommandation</Link>
                    </LinkContainer>
                </Container>
            </NavContainer>
            <Sidebar show={this.state.click} Ent={this.props.Ent} Avan={this.props.Avan} Obj={this.props.Obj} Rec={this.props.Rec}/>
            </div>
        );
    }
}

export default Nav; 