import React, { Component } from "react";
import './Button.scss';

class Button extends Component {
    state = {

    }

    componentDidMount(){
    }

    render(){
        return (
            <div className='as-btn' style={this.props.style} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }
}

export default Button;