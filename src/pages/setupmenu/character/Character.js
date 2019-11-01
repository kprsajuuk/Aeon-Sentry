import React, { Component } from "react";
import NewCharacter from "./NewCharacter";
import LoadCharacter from "./LoadCharacter";
import './Character.scss';

class Character extends Component {
    state = {
        tab: '',
    };

    componentDidMount(){
    }

    changeSection = (tab) => {
        this.setState({
            tab: tab,
        })
    };

    render(){
        return (
            <div className='as-char-main'>
                <div className='as-char-title-box'>
                    <div className='tab-button' onClick={()=>this.changeSection('newChar')}>新建角色</div>
                    <div className='tab-button' onClick={()=>this.changeSection('load')}>选择角色</div>
                </div>
                <div style={{display: this.state.tab === 'load' ? 'block' : 'none', marginTop: 16}}>
                    <LoadCharacter/>
                </div>
                <div style={{display: this.state.tab === 'newChar' ? 'block' : 'none', flex: 1}}>
                    <NewCharacter/>
                </div>
            </div>
        )
    }
}

export default Character;