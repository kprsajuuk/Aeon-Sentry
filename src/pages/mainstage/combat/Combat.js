import React, { Component } from "react";
import { Button } from '@/component/element/element';
import './Combat.scss';

class Combat extends Component {
    state = {
        phase: 0,
        enemy: this.props.event,
    };

    componentDidMount(){
    }

    componentDidUpdate(prevProps){
        if (this.props.event !== prevProps.event){
            this.setState({
                enemy: this.props.event,
            })
        }
    }

    onAction = (act) => {
        this.props.onAction(act);
    }

    render(){
        return (
            <div className='combat-main'>
                <div className='combat-enemy'>
                    <div>血量: {this.state.enemy['hp']}</div>
                    <div className='combat-enemy-avatar'>MuyiShen4 boss专用图.jpg</div>
                    <div>{this.state.enemy.description}</div>
                </div>
                <div className='combat-action'>
                    <Button disabled={!this.props.ready} onClick={()=>this.onAction('attack')}>攻击</Button>
                    <Button disabled={!this.props.ready} onClick={()=>this.onAction('dodge')}>闪避</Button>
                    <Button disabled={!this.props.ready} onClick={()=>this.onAction('charge')}>蓄力</Button>
                </div>
            </div>
        )
    }
}

export default Combat;