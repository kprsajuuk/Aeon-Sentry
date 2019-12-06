import React, { Component } from "react";
import { Button } from '@/component/element/element';
import './Message.scss';

class Message extends Component {
    state = {
        msg: this.props.msg || '为什么会没有信息呢qaq',
    };

    componentDidMount(){
    }

    componentDidUpdate(prevProps){
        if (this.props.msg !== prevProps.msg){
            this.setState({
                msg: this.props.msg,
            })
        }
    }

    onAction = (act) => {
        this.props.onAction(act);
    };

    render(){
        return (
            <div className='message-main'>
                <div className='message-content'>
                    <div className='msg'>{this.state.msg}</div>
                </div>
                <div className='message-action'>
                    <Button disabled={!this.props.ready} onClick={()=>this.onAction('confirm')}>确定</Button>
                </div>
            </div>
        )
    }
}

export default Message;