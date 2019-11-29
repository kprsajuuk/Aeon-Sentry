import React, { Component } from "react";
import './Input.scss';

class Input extends Component {
    state = {
    }

    componentDidMount(){
    }

    changeValue = (e) => {
        if (this.props.onChange){
            this.props.onChange(e.target.value);
        }
    };

    render(){
        return (
            <input placeholder={this.props.placeholder}
                   className='as-input'
                   type={this.props.type}
                   style={this.props.style}
                   value={this.props.value}
                   onChange={this.changeValue}/>
        )
    }
}

export default Input;