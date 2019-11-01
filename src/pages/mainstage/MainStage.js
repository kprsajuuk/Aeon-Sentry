import React, { Component } from "react";
import { Button } from '@/component/element/element';
import Combat from './combat/Combat';
import './MainStage.scss';

class MainStage extends Component {
    state = {
        phase: 0,
        event: {},
    };

    componentDidMount(){
        this.onAction('requestLatest');
    }

    onAction = (action) => {
        let formData = new FormData();
        formData.append('action_name', action);
        fetch(`/takeAction/`, {
            method: 'post',
            body: formData,
        })
            .then(res => res.json())
            .then(res => {
                if (res.success){
                    if (res.event.name === 'enemy'){
                        console.log(res.event.enemy);
                        this.setState({phase: 1, event: res.event})
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
                        <Combat event={this.state.event.enemy} onAction={(act)=>this.onAction(act)}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MainStage;