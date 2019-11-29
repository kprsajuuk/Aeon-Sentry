import React, { Component } from "react";
import Combat from './combat/Combat';
import Message from './message/Message';
import Option from './option/Option';
import Move from './Move';
import Map from './map/Map';
import Status from "./status/Status";
import './MainStage.scss';

class MainStage extends Component {
    state = {
        phase: 1,
        hero: {},
        event: {},
        map: [],
        message: '',
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
                    let data = res.data;
                    this.setState({hero: data.hero, ready: true});
                    if (data.map){
                        this.setState({map: data.map});
                    }
                    if (data.event.name === 'enemy'){
                        this.setState({phase: 2, event: data.event});
                    } else if (data.event.name === 'message'){
                        this.setState({phase: 0, event: data.event});
                    } else if (data.event.name === 'option'){
                        this.setState({phase: 3, event: data.event});
                    } else if (data.event.name === 'start'){
                        this.setState({phase: 1, event: data.event});
                    } else if (data.event.name === 'move'){
                        this.setState({phase: 1, event: data.event});
                    } else{
                        console.log('error on event name');
                    }
                }
            })
    };

    render(){
        return (
            <div className='as-ms'>
                <div className='stage'>
                    <div style={{padding: '6px 10px'}}>
                        <Status hero={this.state.hero}/>
                    </div>
                    <Map map={this.state.map}/>
                    <div className='action-menu absolute-mid'>
                        {this.state.phase === 0 &&
                        <Message ready={this.state.ready} msg={this.state.event.msg}
                                 onAction={(act)=>this.onAction(act)}/>
                        }
                        {this.state.phase === 1 &&
                        <Move ready={this.state.ready} event={this.state.event}
                              onAction={(act)=>this.onAction(act)}/>
                        }
                        {this.state.phase === 2 &&
                        <Combat ready={this.state.ready} event={this.state.event.enemy}
                                onAction={(act)=>this.onAction(act)}/>
                        }
                        {this.state.phase === 3 &&
                        <Option ready={this.state.ready} msg={this.state.event.msg}
                                option={this.state.event.options} onAction={(act)=>this.onAction(act)}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MainStage;