import React from "react";
import Styled from "styled-components";
import { Container, Courbe } from "./Homemain";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPersonRunning} from '@fortawesome/free-solid-svg-icons'

const RecommContainer = Styled(Container)`
flex-direction: row;
height: 85vh;
align-items: flex-start;
justify-content: space-between;
padding: 0;
@media (max-width: 768px) {
    align-items: flex-start;
    justify-content: center;
  }
`;

const AdviceContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
width: 40%;
margin-left: 2rem;
height: 80%;
@media (max-width: 768px) {
    width: 90%;
    margin-left: 0;
  }
`;

const RunnerContainer = Styled(AdviceContainer)`
justify-content: center;
height: 90%;
width: 50%;
@media (max-width: 768px) {
    display: none;
    width: 0;
  }
`;

const Title = Styled.span`
color: #FFF;
font-size: 50px;
font-style: normal;
font-weight: 600;
line-height: normal;
height: 10%;
@media (max-width: 768px) {
    font-size: 40px;
  }
`;

const SubAdviceContainer = Styled(Courbe)`
width: 95%;
height: 90%;
flex-direction: column;
align-items: flex-start;
margin-top: 2rem;
padding: 1.5rem;
`;

const AdviceTitle = Styled.div`
border-radius: 40px;
background: #DF5858;
width: 60%;
display: flex;
justify-content: center;
align-items: center;
height: 15%;
color: white;
cursor: pointer;
`;

const Advice = Styled.p`
width: 100%;
color: #FFF;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;



class Recomm extends React.Component{

    render(){

        return(

            <RecommContainer>
                <AdviceContainer>
                    <Title>Recommandation</Title>
                    <SubAdviceContainer>
                        <AdviceTitle>Conseil d'aujourd'hui</AdviceTitle>
                        <Advice>Hydratez-vous avant, pendant et après l'entraînement : Avant de commencer votre course, assurez-vous d'être bien hydraté en buvant suffisamment d'eaudans les heures qui précèdent votre séance d'entraînement.Pendant la course, essayez de consommer de petites quantités d'eau régulièrement pour maintenirvotre niveau d'hydratation. Après l'entraînement,reconstituez vos réserves d'eau en buvant une quantité adéquate d'eau.</Advice>
                    </SubAdviceContainer>
                </AdviceContainer>
                <RunnerContainer>
                    <FontAwesomeIcon icon={faPersonRunning} style={{width: '90%', height: '75%', color: '#DF5858'}}></FontAwesomeIcon>
                </RunnerContainer>
            </RecommContainer>
        );
    }
}

export default Recomm;