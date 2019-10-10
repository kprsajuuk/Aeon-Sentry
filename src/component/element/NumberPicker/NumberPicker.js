import React, { Component } from "react";
import './NumberPicker.scss';

class NumberPicker extends Component {
    state = {

    }

    componentDidMount(){
    }

    changeNumber = (n) => {
        this.props.onChange(this.props.attr, n);
    }

    render(){
        return (
            <div className='as-np'>
                <div className='as-np-box'>
                    <img onClick={()=>this.changeNumber(-1)} className='as-np-icon up'
                         src={require('@/assets/icons/arrow-left.svg')}/>
                    <div className='border-2 as-np-num'>{this.props.value}</div>
                    <img onClick={()=>this.changeNumber(1)} className='as-np-icon'
                         src={require('@/assets/icons/arrow-right.svg')}/>
                </div>
            </div>
        )
    }
}

export default NumberPicker;