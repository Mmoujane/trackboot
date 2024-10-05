import React from "react";
import Styled , { keyframes } from 'styled-components';
import Chart from "./chart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import * as XLSX from "xlsx";


export const Container = Styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
margin-top: 15vh;
padding-bottom: 1rem;
`;

export const Start = Styled.div`
width: 80%;
height: 5vh;
display: flex;
justify-content: flex-start;
position: relative;
align-items: center;
`;

const fadin = keyframes`
0%{
    opacity: 1;
}

50%{
    opacity: 0;
}

100%{
    opacity: 1;
}
`;

const StartIcon = Styled.div`
width: 70px;
height: 30px;
margin-left: 0.6rem;
border-radius: 30px;
display: flex;
position: relative;
align-items: center;
background: ${(props) => (props.$state ? '#4A8CFF' : '#ebf0f2')};
transition: justify-content 1s;
box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
@media (max-width: 768px) {
    width: 8vw;
    height: 18px;
  }
`;

const CercleButton = Styled.div`
width: 28px;
height: 28px;
background: ${(props) => (props.$state ? '#ebf0f2' : '#4A8CFF')};
border-radius: 50%;
cursor: pointer;
transition: left 0.5s;
position: absolute;
left: ${(props) => (props.$state ? 'calc(100% - 28px)' : '0')};
margin-right: 0.03rem;
@media (max-width: 768px) {
    width: 16px;
    height: 16px;
    left: ${(props) => (props.$state ? 'calc(100% - 16px)' : '0')};
  }
`;

const H2 = Styled.h2`
color: black;
animation-name: ${props => props.$state ? fadin : null};
animation-duration: 1s;
animation-delay: 0s;
animation-iteration-count: 1;
animation-timing-function: ease;
@media (max-width: 768px) {
    font-size: 20px;
    font-weight: 600;
  }
`;

const CourbeContainer = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
padding-top: 2rem;
padding-bottom: 2rem;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Courbe = Styled.div`
width: 30%;
height: 35vh;
border-radius: 30px;
background: white;
box-shadow: 5px 0px 8px 8px rgba(0, 0, 0, 0.25);
display: flex;
position: relative;
justify-content: center;
align-items: center;
@media (max-width: 768px) {
    width: 100%;
    height: 70vh;
    margin-top: 0.6rem;
  }
`;

const CaloriesContainer = Styled(Start)`
height: auto;
padding: 1rem;
margin-top: 3rem;
`;

export const Calories = Styled.div`
border-radius: 70px;
background: white;
box-shadow: 5px 4px 8px 8px rgba(0, 0, 0, 0.25);
width: 25%;
height: 8vh;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 768px) {
   width: 60%;
  }
`;

class MainHome extends React.Component {

    constructor(props){
        super(props);
    }

    create_data = (data) => {
        let result = [];
        for(let i = 0; i < data.labels.length ; i++){
            result.push({time: data.labels[i], DATA: data.datasets[0].data[i]});
            console.log(i);
        }
        return result;
    }

    download_data = (index, flName) => {
        const workbook = XLSX.utils.book_new();

    console.log(this.props.dataEnt[index]);
    const worksheet = XLSX.utils.json_to_sheet(
      this.create_data(this.props.dataEnt[index])
    );

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    const excelBlob = new Blob([XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });

    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(excelBlob);
    downloadLink.download = flName;
    downloadLink.click();
    }

    
    render(){
        return(
            <Container>
                <Start>
                    <H2 $state={this.props.Show}>{this.props.headText}</H2>
                    <StartIcon $state={this.props.Start}>
                        <CercleButton $state={this.props.Start} onClick={() => this.props.click()}/>
                    </StartIcon>
                </Start>
                <CourbeContainer>
                    <Courbe>
                        <Chart data={this.props.dataEnt[0]}/>
                        <FontAwesomeIcon icon={faDownload} style={{position: 'absolute', right: '3%', top: '5%', color: '#4A8CFF', fontSize: '18px', cursor: "pointer"}} onClick={() => this.download_data(0, "vitesse.xlsx")}/>
                    </Courbe>
                    <Courbe>
                        <Chart data={this.props.dataEnt[1]}/>
                        <FontAwesomeIcon icon={faDownload} style={{position: 'absolute', right: '3%', top: '5%', color: '#4A8CFF', fontSize: '18px', cursor: "pointer"}} onClick={() => this.download_data(1, "acceleration.xlsx")}/>
                    </Courbe>
                    <Courbe>
                        <Chart data={this.props.dataEnt[2]}/>
                        <FontAwesomeIcon icon={faDownload} style={{position: 'absolute', right: '3%', top: '5%', color: '#4A8CFF', fontSize: '18px', cursor: "pointer"}} onClick={() => this.download_data(2, "puissance.xlsx")}/>
                    </Courbe>
                </CourbeContainer>
                <CaloriesContainer>
                    <Calories>
                        <span style={{color: 'black', fontSize: '12px'}}>calories brulees:</span>
                        <span style={{color: '#4A8CFF', fontSize: '16px', fontWeight: '500', marginLeft: '0.5rem'}}>{this.props.dataEnt[0].labels.length === 0 ? 0 : -Math.ceil((this.props.dataEnt[0].labels[this.props.dataEnt[0].labels.length - 1] / 3600) * 11.5 * 50)}</span>
                    </Calories>
                </CaloriesContainer>
            </Container>

        );
    }
}


export default MainHome;