import React, { Component } from "react";
import './Tooltip.scss';

class Tooltip extends Component {
    state = {

    };

    componentDidMount(){
    }

    render(){
        return (
            <div className='as-tooltip'>
                <div className='as-tooltip-content'>
                    {this.props.children}
                </div>
                <div className='tip'>{this.props.tip}</div>
            </div>
        )
    }
}

export default Tooltip;