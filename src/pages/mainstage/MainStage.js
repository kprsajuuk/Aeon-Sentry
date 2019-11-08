import React, { Component } from "react";
import { Button } from '@/component/element/element';
import Combat from './combat/Combat';
import './MainStage.scss';

class MainStage extends Component {
    state = {
        phase: 0,
        event: {},
        hero: {},
        ready: false,
    };

    componentDidMount(){
        this.onAction('requestLatest');
    }

    onAction = (action) => {
        this.setState({ready: false});
        let formData = new FormData();
        formData.append('action_name', action);
        fetch(`/takeAction/`, {
            method: 'post',
            body: formData,
        })
            .then(res => res.json())
            .then(res => {
                if (res.success){
                    this.setState({hero: res.hero, ready: true});
                    if (res.event.name === 'enemy'){
                        this.setState({phase: 1, event: res.event});
                    } else if (res.event.name === 'win'){
                        this.setState({phase: 0, event: {}});
                    }
                }
            })
    };

    render(){
        return (
            <div className='as-ms'>
                <div className='stage'>
                    <div className='action-menu absolute-mid'>
                        {this.state.phase === 0 &&
                        <Button onClick={()=>this.onAction('newroom')}>前进</Button>
                        }
                        {this.state.phase === 1 &&
                        <Combat ready={this.state.ready}
                                event={this.state.event.enemy} onAction={(act)=>this.onAction(act)}/>
                        }
                    </div>
                    <div>
                        Hero Attributes
                        <div>血量:{this.state.hero.hp}</div>
                        <div>攻击力:{this.state.hero.attack}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainStage;