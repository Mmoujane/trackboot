import React from "react";
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'



class Chart extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Line data={this.props.data}/>
        );
    }
}

export default Chart;