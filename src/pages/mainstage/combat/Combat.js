import React, { Component } from "react";
import { Button } from '@/component/element/element';
import Status from "@/pages/mainstage/status/Status";
import '../status/Status';
import './Combat.scss';

class Combat extends Component {
    state = {
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
    };

    render(){
        return (
            <div className='combat-main'>
                <div className='combat-enemy'>
                    <div className='combat-enemy-avatar'>
                        <img style={{height: "100%", maxHeight: "40vh"}} src={require('@/assets/img/boss.png')}/>
                    </div>
                    <div style={{padding: '0 10px'}}>
                        <Status hero={this.state.enemy}/>
                    </div>
                </div>
                {this.state.enemy.status !== 'death' &&
                <div className='combat-action'>
                    <Button disabled={!this.props.ready} onClick={()=>this.onAction('attack')}>攻击</Button>
                    <Button disabled={!this.props.ready} style={{margin: '0 12px'}}
                            onClick={()=>this.onAction('dodge')}>闪避</Button>
                    <Button disabled={!this.props.ready} onClick={()=>this.onAction('charge')}>蓄力</Button>
                </div>}
                {this.state.enemy.status === 'death' &&
                <div className='combat-action'>
                    <Button disabled={!this.props.ready} onClick={()=>this.onAction('endBattle')}>结束战斗</Button>
                </div>
                }
            </div>
        )
    }
}

export default Combat;