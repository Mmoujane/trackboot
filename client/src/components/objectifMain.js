import React from "react";
import Styled from 'styled-components';
import { Container, Start, Calories} from "./Homemain";
import io from 'socket.io-client';


const Main = Styled(Container)`
height: 93vh;
justify-content: space-between;
margin-top: 7vh;
padding: 0;
`;

const H1 = Styled.h1`
color: #FFF;
font-size: 50px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

const BigTitle = Styled(Start)`
height: 10%;
margin-top: 3rem;
`;

const SvgContainer = Styled.div`
width: 100%;
height: 70%;
position: relative;
`;

const Send = Styled.button`
border-radius: 70px;
background: white;
cursor: pointer;
width: 25%;
height: 8vh;
display: flex;
position: absolute;
color: black;
bottom: 10%;
left: 10%;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
   width: 60%;
  }
`;

const Input = Styled.input`
width: 25%;
padding: 0.3rem;
border: none;
border-bottom: 2px solid white;
outline: none;
position: absolute;
left: ${props => props.$left};
top: 60%;
background: transparent;
&::placeholder {
    color: white; /* Replace "red" with your desired color */
  }
`;

class ObjectifMain extends React.Component {

    constructor(props){
        super(props);
        this.socket = io("http://localhost:3001");
        this.state = {
            distance: '0',
            temps: '0'
        }
    }

    setObjectif = () => {
        this.socket.emit("setObjectif", {distance: this.state.distance, temps: this.state.temps})
        console.log(this.state.distance, this.state.temps)
    }

    onchangeDis = (e) => {
        this.setState({distance : e.target.value});
    }

    onchangeTp = (e) => {
        this.setState({temps : e.target.value});
    }


    render(){
        return(
            <Main>
                <BigTitle>
                    <H1>Fixer votre objectif :</H1>
                </BigTitle>
                <SvgContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
                        <path d="M846.981 176.203C514.352 -54.9349 221.592 -33.7144 -1 103.247V703H1728V209.411C1632.09 52.8726 1179.61 407.341 846.981 176.203Z" fill="#4A8CFF" stroke="black"/>
                    </svg>
                    <Input type="text" placeholder="distance parcourue" $left="10%" onChange={this.onchangeDis}/>
                    <Input type="text" placeholder="temps correspondant" $left="55%" onChange={this.onchangeTp}/>
                    <Send onClick={() => this.setObjectif()}>envoyer</Send>
                </SvgContainer>
            </Main>
        );
    }
}

export default ObjectifMain;