import React, { Component } from "react";
import Combat from './combat/Combat';
import Message from './message/Message';
import Option from './option/Option';
import Move from './Move';
import Map from './map/Map';
import Status from "./status/Status";
import StatusBtn from "./status/StatusBtn";
import './MainStage.scss';
import {Modal} from "@/component/element/element";

class MainStage extends Component {
    state = {
        phase: 1,
        hero: {},
        event: {},
        map: [],
        message: '',
        ready: false,
        lost: false,
    };

    componentDidMount(){
        this.onAction('requestLatest');
    }

    onUpgrade = (upgrade) => {
        let formData = new FormData();
        formData.append('type', upgrade.type);
        formData.append('num', upgrade.num);
        fetch(`/upgrade/`, {
            method: 'post',
            body: formData,
        })
            .then(res => res.json())
            .then(res => {
                if (res.success && res.hero){
                    this.setState({
                        hero: res.hero,
                    })
                }
            })
    };

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
                    } else if (data.event.name === 'win'){
                        this.setState({phase: 0, event: data.event, win: true});
                    } else if (data.event.name === 'journey_end'){
                        if (data.event.journey === "win"){
                            this.setState({win: true});
                        } else if (data.event.journey === "lost"){
                            this.setState({lost: true});
                        }
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
                        <StatusBtn onUpgrade={this.onUpgrade} hero={this.state.hero}/>
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
                <Modal display={this.state.lost}>
                    <p style={{marginBottom: 12}}>你输了</p>
                    <a style={{border: "1px solid #333", padding: 6}} className='border' href='/setup'>返回角色创建页面</a>
                </Modal>
                <Modal display={this.state.win}>
                    <p style={{marginBottom: 12}}>恭喜你 打败了本层boss</p>
                    <p style={{marginBottom: 12}}>目前测试版只设置了一层</p>
                    <a style={{border: "1px solid #333", padding: 6}} className='border' href='/setup'>返回角色创建页面</a>
                </Modal>
            </div>
        )
    }
}

export default MainStage;