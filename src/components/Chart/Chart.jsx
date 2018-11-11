import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react'; 
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';

const data = [
    { text: 'Windows', value: 500 },
    { text: 'MacOS', value: 300 },
    { text: "Linux", value: 200 }
];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

const chartStyle = {
    margin: "auto"
}

class Chart extends Component {
    constructor(props) {
        super(props);
        this.getOptions = this.getOptions.bind(this);
    }
    getOptions() {
        return {
            xAxis: [
                {
                    type: "category",
                    data: ["Windows","MacOS","Linux"]
                }
            ],
            yAxis: [
                {
                    type: "value"
                }
            ],
            series: [
                {
                    name: "Vote",
                    type: "bar",
                    data: this.props.data
                }
            ]
        }
    }
    handleBarClick(element, id) {
        console.log(`The bin ${element.text} with id ${id} was clicked`);
    }
    render() {
        return (
            <div style={{ margin: "auto"}}>
                <ReactEcharts option={this.getOptions()}/>
            </div>
        );
    }
}

export default Chart;