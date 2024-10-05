import React from "react";
import Nav from "../components/nav";
import AvancementMain from "../components/avancementMain";
import io from 'socket.io-client';



class Avancement extends React.Component{

    constructor(props){
        super(props);
        this.socket = io("http://localhost:3001");
        this.today = new Date();
        this.state = {
            calories_data:  {
                labels: ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'],
                datasets: [
                    {
                        label: 'calories',
                        data: [0, 0, 0, 0, 0, 0, 0],
                        tension: 0.5,
                        borderColor: '#4A8CFF',
                    }
                ]
            },
            Data: []
        }
    }

    callBack = (data) => {
        this.setState({calories_data: {
            labels: ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'],
            datasets: [
                {
                    label: 'calories',
                    data: [
                    -data[0].calories,
                    -data[1].calories,
                    -data[2].calories,
                    -data[3].calories,
                    -data[4].calories,
                    -data[5].calories,
                    -data[6].calories
                ],
                    tension: 0.5,
                    borderColor: '#4A8CFF',
                }
            ]
        }, Data: data})
    }

    componentDidMount(){
        console.log("hi");
        this.socket.emit("send_progression");
        this.socket.on("emitProgress", this.callBack);
    }

    componentWillUnmount(){
        this.socket.off("emitProgress", this.callBack);
    }

    render(){
        return(
            <div>
                <Nav Avan/>
                <AvancementMain Data={this.state.calories_data} calorie={-this.state.calories_data.datasets[0].data[this.today.getDay() === 0 ? this.state.calories_data.datasets[0].data.length - 1 : this.today.getDay() - 1]} EntrenementData={this.state.Data}/>
            </div>
        );
    }
}


export default Avancement;