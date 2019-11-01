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
            <div>
                <div>
                    <div>血量: {this.state.enemy['hp']}</div>
                    MuyiShen4 boss专用图.jpg
                </div>
                <div>
                    <Button onClick={()=>this.onAction('attack')}>攻击</Button>
                </div>
            </div>
        )
    }
}

export default Combat;