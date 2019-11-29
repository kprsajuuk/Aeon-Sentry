import React, { Component } from "react";
import { Button } from '@/component/element/element';
import './Combat.scss';
import '../status/Status';
import Status from "@/pages/mainstage/status/Status";

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
                    <div className='combat-enemy-avatar'>MuyiShen4 boss专用图.jpg</div>
                    <div style={{padding: '0 10px'}}>
                        <Status hero={this.state.enemy}/>
                    </div>
                </div>
                <div className='combat-action'>
                    <Button disabled={!this.props.ready} onClick={()=>this.onAction('attack')}>攻击</Button>
                    <Button disabled={!this.props.ready} style={{margin: '0 12px'}}
                            onClick={()=>this.onAction('dodge')}>闪避</Button>
                    <Button disabled={!this.props.ready} onClick={()=>this.onAction('charge')}>蓄力</Button>
                </div>
            </div>
        )
    }
}

export default Combat;