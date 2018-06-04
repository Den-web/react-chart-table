import React, { Component } from 'react';

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Brush, AreaChart, Area} from 'recharts';

export default class Cartogram extends Component {

    static displayName = 'LineChartDemo';


    handleClick = (data, e) => {
        console.log(data);
    };

    handleLineClick = (data, e) => {
        console.log('callback', data, e);
    };

    handleLegendMouseEnter = () => {
        this.setState({
            opacity: 0.5,
        });
    };

    handleClickDot = (data, e) => {
        console.log('dot click', data, e);
    };

    handleLegendMouseLeave = () => {
        this.setState({
            opacity: 1,
        });
    };

    handleChangeAnotherState = () => {
        this.setState({
            anotherState: !this.state.anotherState,
        })
    };

    render() {
        const {data} = this.props;
        return (
            <div className='line-charts'>

                <p>LineChart with delay from American airport</p>
                <div className="line-chart-wrapper">
                    <LineChart
                        width={1000} height={400} data={data}
                        margin={{ top: 30, right: 10, bottom: 60, left: 50 }}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="airport" label="" />
                        <YAxis domain={['auto', 'auto']} label="" />
                        <Tooltip />
                        <Line dataKey="arr_delay" stroke="#ff7300" dot={false} />
                        <Brush dataKey="airport" startIndex={data.length - 40}>
                            <AreaChart>
                                <CartesianGrid />
                                <YAxis hide domain={['auto', 'auto']} />
                                <Area dataKey="arr_delay" stroke="#ff7300" fill="#ff7300" dot={false} />
                            </AreaChart>
                        </Brush>
                    </LineChart>
                </div>
            </div>
        );
    }
}
