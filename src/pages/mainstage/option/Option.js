import React, { Component } from "react";
import { Button } from '@/component/element/element';
import './Option.scss';

class Option extends Component {
    state = {
        option: this.props.option || [],
        selected: null,
    };

    componentDidMount(){
    }

    componentDidUpdate(prevProps){
        if (this.props.option !== prevProps.option){
            this.setState({
                option: this.props.option
            })
        }
    }

    onAction = () => {
        this.props.onAction(this.state.selected);
    }

    onSelectOption = (key) => {
        this.setState({
            selected: key,
        })
    };

    render(){
        return (
            <div className='option-main'>
                <div className='option-selection'>
                {
                    this.state.option.map((item) => {
                        return (
                            <div className={`item${this.state.selected === item.key ? ' selected' : ''}`}
                                 key={item.key} onClick={()=>this.onSelectOption(item.key)}>
                                <div className='describe'>{item.describe}</div>
                            </div>
                        )
                    })
                }
                </div>
                <div className='option-message'>{this.props.msg}</div>
                <Button disabled={!this.props.ready || !this.state.selected}
                        onClick={this.onAction}>选择!</Button>
            </div>
        )
    }
}

export default Option;