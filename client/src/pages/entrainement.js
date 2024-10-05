import React from 'react';
import Nav from '../components/nav';
import MainHome from '../components/Homemain';
import io from 'socket.io-client';



class Entrainent extends React.Component {

  constructor(props){

    super(props);
    this.socket = io("http://localhost:3001");
    this.state = {
      calories: 0,
      start: false,
      starttext: "commencer l'entrainement:",
      show: false,
      data: [
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
    ]
      
  }
}

    callBack = (data) => {
      console.log("received");
      let datatype = [];
      let Time = [];
      let deltaV = 0;
      let deltaT = 0;
      let derivative = 0;
      this.setState({data: this.state.data.map(item => {
        Time = item.labels.concat(data.time);
        if(item.datasets[0].label === "vitesse"){
          datatype = item.datasets[0].data.concat(data.velocity);
          if(datatype.length > 1){
            deltaV = data.velocity - datatype[datatype.length - 2];
            deltaT = data.time - Time[Time.length - 2];
            derivative = deltaV / deltaT;
          }
        }else if(item.datasets[0].label === "acceleration"){
          datatype = item.datasets[0].data.concat(derivative);
        }else if(item.datasets[0].label === "puissance"){
          datatype = item.datasets[0].data.concat(50*derivative*data.velocity);
        }
        return({
          labels: Time,
          datasets: [
            {
                label: item.datasets[0].label,
                data: datatype,
                tension: 0.5,
                borderColor: '#4A8CFF',
            }
        ]
        })
      })})
    }

    handleClick = () => {
      if(this.state.start === false){
        this.socket.emit("send_data");
        this.setState({show: true, start: true});
        setTimeout(() => this.setState({starttext: "arreter l'entrainement:"}), 500);
        setTimeout(() => this.setState({show: false}), 1000);
      }else{
        this.setState({show: true, data: this.state.data.map(item => {
          return({
            labels: [],
            datasets: [
              {
                  label: item.datasets[0].label,
                  data: [],
                  tension: 0.5,
                  borderColor: '#4A8CFF',
              }
          ]
          })
        }), start: false});
        setTimeout(() => this.setState({starttext: "commencer l'entrainement:"}), 500);
        setTimeout(() => this.setState({show: false}), 1000);
      }
    }

    create_data = (data) => {
      let result = {time: [], data: []};
      for(let i = 0; i < data.labels.length ; i++){
          result.time.push(data.labels[i]);
          result.data.push(data.datasets[0].data[i]);
      }
      return result;
  }

    createHollData = (hollData) => {
      let hollResult = [];
      for(let i = 0; i < hollData.length; i++){
        hollResult.push(this.create_data(hollData[i]))
      }

      return hollResult;
    }

    handleEnd = () => {
      this.socket.emit("storeData", {calories: -Math.ceil((this.state.data[0].labels[this.state.data[0].labels.length - 1] / 3600) * 11.5 * 50), vitesse_data: this.createHollData(this.state.data)[0], acceleration_data: this.createHollData(this.state.data)[1], puissance_data: this.createHollData(this.state.data)[2]})
    }

    componentDidMount(){
      console.log("hi");
      this.socket.on("reiceive_data", this.callBack);
      this.socket.on("end", this.handleEnd);
    }

    componentWillUnmount() {
      this.socket.off("reiceive_data", this.callBack);
      this.socket.off("end", this.handleEnd);
    }

    render() {
    
      return(
        <div>
            <Nav Ent/>
            <MainHome dataEnt={this.state.data} click={this.handleClick} headText={this.state.starttext} Show={this.state.show} Start={this.state.start}/>
        </div>
        
      );
    }
}
    
export default Entrainent;