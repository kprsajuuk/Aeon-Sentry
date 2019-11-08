import React, { Component } from "react";
import './Button.scss';

class Button extends Component {
    state = {

    }

    componentDidMount(){
    }

    clickAction = () => {
        if (!this.props.disabled){
            this.props.onClick()
        }
    }

    render(){
        const { disabled } = this.props
        return (
            <div className='as-btn'
                 style={{...this.props.style, opacity: disabled ? 0.5 : 1,
                            cursor: disabled ? 'default' : 'pointer'}}
                 onClick={this.clickAction}>
                {this.props.children}
            </div>
        )
    }
}

export default Button;