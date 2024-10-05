import React from "react";
import Styled from "styled-components";
import { Container, Start, Courbe } from "./Homemain";
import Chart from "./chart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFire, faChartLine, faCircleRight, faCircleLeft, faChartColumn, faPlay, faCirclePause, faCirclePlay, faX, faL} from '@fortawesome/free-solid-svg-icons'


const H1 = Styled.h1`
color: black;
font-size: 50px;
font-style: normal;
font-weight: 600;
line-height: normal;
@media (max-width: 768px) {
    font-size: 40px;
  }
`;

const AvancementContainer = Styled(Container)`
height: 120vh;
justify-content: flex-start;
padding: 0;
@media (max-width: 768px) {
    height: 110vh;
  }
`;

const SubContainer = Styled.div`
width: 90%;
height: 40%;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 5vh;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CaloriesContainer = Styled(Courbe)`
width: 60%;
height: 100%;
@media (max-width: 768px) {
    width: 90%;
    heigth: 45%;
  }
`;


const InfoContainer = Styled.div`
width: 30%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
@media (max-width: 768px) {
    width: 90%;
    height: 45%;
  }
`;


const Info = Styled(Courbe)`
width: 100%;
height: 45%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const CalNum = Styled.span`
color: black;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-right: 10%;
@media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Title = Styled.span`
border-radius: 30px;
background: transparent;
position: absolute;
left: 7%;
top:0%;
color: #939393;
font-size: 15px;
font-style: normal;
font-weight: 300;
line-height: normal;
@media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Semaine = Styled.span`
height: 8%;
width: 13%;
border-radius: 30px;
background: #4A8CFF;
position: absolute;
right: 3%;
top:1%;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 10px;
font-style: normal;
font-weight: 300;
line-height: normal;
@media (max-width: 768px) {
    width: 27%;
    top: 3%;
    height: 12%;
  }
`;

const BottomBar = Styled.div`
width: 60%;
height: 2vh;
border-radius: 30px;
background: #C4CFDE;
margin-right: 6%;
@media (max-width: 768px) {
    height: 1vh;
  }
`;

const UpperBar = Styled.div`
width: 60%;
height: 2vh;
border-radius: 30px;
background: #4A8CFF;
@media (max-width: 768px) {
    height: 1vh;
  }
`;

const Percentage = Styled.span`
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
color: black;
position: absolute;
top: 15%;
right: 8%;
@media (max-width: 768px) {
    font-size: 16px;
    top: 10%;
  }
`;


const CharacteresticsContainer = Styled.div`
width: 100%;
height: 60%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`;

const CharTitle = Styled(H1)`
font-size: 30px;
margin-top: 12vh;
`;

const CarouselContainer = Styled.div`
width: 100%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
`;

const Carousel = Styled.div`
width: 80%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
overflow: hidden;
scroll-behavior: smooth;
`;


const CharCurveContainer = Styled(Courbe)`
flex: 0 0 30%;
heigth: 90%;
margin: calc(10% / 6);
flex-direction: column;
cursor: pointer;
@media (max-width: 768px) {
    flex: 0 0 95%;
    height: 70%;
  }
`;

const Day = Styled.span`
width: 10%;
height: 10%;
padding: 0.4rem;
background: ${props => props.$DayColor};
position: absolute;
right: 3%;
top: 4%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 13px;
`;

const DayAdvencementContainer = Styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background-color: white;
opacity: 1;
display: flex;
justify-content: space-between;
align-items: center;
z-index: 10;
padding-left: 1rem;
padding-right: 1rem;
`;

const Advencment = Styled(Courbe)`
width: 30%;
height: 40%;
position: relative;
`;

class AvancementMain extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            display: false,
            Data: [
                {
                    labels: [],
                    datasets: [
                        {
                            label: 'vitesse',
                            data: [],
                            tension: 0.5,
                            borderColor: '#4A8CFF',
                        }
                    ]
                },
            
                {
                    labels: [],
                    datasets: [
                        {
                            label: 'acceleration',
                            data: [],
                            tension: 0.5,
                            borderColor: '#4A8CFF',
                        }
                    ]
                },
            
                {
                    labels: [],
                    datasets: [
                        {
                            label: 'puissance',
                            data: [],
                            tension: 0.5,
                            borderColor: '#4A8CFF',
                        }
                    ]
                }
            ],
            ShartsData: [
                {
                    day: 'dim',
                    dayNum: window.innerWidth > 768 ? 7 : 1
                },
                {
                    day: 'lun',
                    dayNum: window.innerWidth > 768 ? 1 : 2
                },
                {
                    day: 'mar',
                    dayNum: window.innerWidth > 768 ? 2 : 3
                },
                {
                    day: 'mer',
                    dayNum: window.innerWidth > 768 ? 3 : 4
                },
                {
                    day: 'jeu',
                    dayNum: window.innerWidth > 768 ? 4 : 5
                },
                {
                    day: 'ven',
                    dayNum: window.innerWidth > 768 ? 5 : 6
                },
                {
                    day: 'sam',
                    dayNum: window.innerWidth > 768 ? 6 : 7
                }
                ],

        };

        this.myref = React.createRef();
    }


    CarouselLeftHandler = () => {
        let scalePercent = 0;
        if (window.innerWidth > 768){
            scalePercent = 0.01 * 80 * (0.3 + (0.1 / 3));
        }
        else{
            scalePercent = 0.01 * 80 * (0.95 + (0.1 / 3));
        }
        this.myref.current.scrollLeft += window.innerWidth * scalePercent;
        this.setState({ShartsData: this.state.ShartsData.map((items) => {
            return({day: items.day, dayNum: items.dayNum - 1})
        })});
    };

    CarouselRightHandler = () => {
        let scalePercent = 0;
        if (window.innerWidth > 768){
            scalePercent = 0.01 * 80 * (0.3 + (0.1 / 3));
        }
        else{
            scalePercent = 0.01 * 80 * (0.95 + (0.1 / 3));
        }
        this.myref.current.scrollLeft -= window.innerWidth * scalePercent;
        this.setState({ShartsData: this.state.ShartsData.map((items) => {
            return({day: items.day, dayNum: items.dayNum + 1})
        })});
    }

    Handleclick = (index) => {
        let data = index == 0 ? this.props.EntrenementData[this.props.EntrenementData.length - 1] : this.props.EntrenementData[index - 1];
        this.setState({Data: [{
            labels: data.vitesse_data.time,
            datasets: [
                {
                    label: 'vitesse',
                    data: data.vitesse_data.data,
                    tension: 0.5,
                    borderColor: '#4A8CFF',
                }
            ]
        },
    
        {
            labels: data.acceleration_data.time,
            datasets: [
                {
                    label: 'acceleration',
                    data: data.acceleration_data.data,
                    tension: 0.5,
                    borderColor: '#4A8CFF',
                }
            ]
        },
    
        {
            labels: data.puissance_data.time,
            datasets: [
                {
                    label: 'puissance',
                    data: data.puissance_data.data,
                    tension: 0.5,
                    borderColor: '#4A8CFF',
                }
            ]
        }]
        , display: true});
    console.log(data);
    }

    render(){
        const ChartsContainer = this.state.ShartsData.map((items, index) => {
            return(
                <CharCurveContainer key={index} onClick={() => this.Handleclick(index)}>
                    <Day $DayColor={items.dayNum === 1 ? '#4A8CFF' : '#C4CFDE'}>{items.day}</Day>
                    <FontAwesomeIcon icon={faChartColumn} style={{color: items.dayNum === 1 ? '#4A8CFF' : '#C4CFDE', width: '70%', height: '60%'}}/>
                    <FontAwesomeIcon icon={items.dayNum === 1 ? faCirclePlay : faCirclePause} style={{color: items.dayNum === 1 ? '#4A8CFF' : '#C4CFDE', width: '15%', height: '15%', marginTop: '0.6rem'}}/>
                </CharCurveContainer>
            );
        })


        return(
            <div>
                {this.state.display == true ? 
                <DayAdvencementContainer>
                    <FontAwesomeIcon icon={faX} style={{color: '#4A8CFF', width: '3%', height: '3%', cursor: 'pointer', position: 'absolute', top: '5vh', right: '5vw'}} onClick={() => this.setState({display: false})}/>
                    <Advencment>
                        <Chart data={this.state.Data[0]}/>
                    </Advencment>
                    <Advencment>
                        <Chart data={this.state.Data[1]}/>
                    </Advencment>
                    <Advencment>
                        <Chart data={this.state.Data[2]}/>
                    </Advencment>
                </DayAdvencementContainer> : 
                <AvancementContainer>
                <Start>
                    <H1>Votre Avancement :</H1>
                </Start>
                <SubContainer>
                    <CaloriesContainer>
                        <Semaine>Cette semaine</Semaine>
                        <Chart data={this.props.Data}/>
                    </CaloriesContainer>
                    <InfoContainer>
                        <Info>
                            <Title>calories brulees aujourd'hui</Title>
                            <FontAwesomeIcon icon={faFire} style={{color: '#4A8CFF', width: '20%', height: '65%', marginLeft: '4%'}}/>
                            <CalNum>{this.props.calorie}cal</CalNum>
                        </Info>
                        <Info>
                            <Title>progression hebdomadaire</Title>
                            <Percentage>60%</Percentage>
                            <FontAwesomeIcon icon={faChartLine} style={{color: '#4A8CFF', width: '20%', height: '65%', marginLeft: '4%'}}/>
                            <BottomBar>
                                <UpperBar />
                            </BottomBar>
                        </Info>
                    </InfoContainer>
                </SubContainer>
                <CharacteresticsContainer>
                    <Start>
                        <CharTitle>Vos caractéristiques</CharTitle>
                    </Start>
                    <CarouselContainer>
                        <FontAwesomeIcon icon={faCircleLeft} style={{color: '#C4CFDE', width: '10%', height: '10%', cursor: 'pointer'}} onClick={() => this.CarouselRightHandler()}/>
                        <Carousel ref={this.myref}>
                            {ChartsContainer}
                        </Carousel>
                        <FontAwesomeIcon icon={faCircleRight} style={{color: '#4A8CFF', width: '10%', height: '10%', cursor: 'pointer', marginTop: '0.6rem'}} onClick={() => this.CarouselLeftHandler()}/>
                    </CarouselContainer>
                </CharacteresticsContainer>
                </AvancementContainer>
                }
            </div>
        );
    }
}


export default AvancementMain;