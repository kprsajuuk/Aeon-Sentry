import React, { Component } from "react";
import NewCharacter from "./new/NewCharacter";
import LoadCharacter from "./load/LoadCharacter";
import './Character.scss';

class Character extends Component {
    state = {
        tab: 'newChar',
    };

    componentDidMount(){
    }

    buildHero = () => {
        this.setState({tab: 'newChar'})
    };

    loadHero = () => {
        this.setState({tab: 'load'});
        this.loadChar.loadAllHero();
    };

    render(){
        return (
            <div className='as-char-main'>
                <div className='as-char-title-box'>
                    <div className='tab-button' onClick={this.buildHero}>新建角色</div>
                    <div className='tab-button' onClick={this.loadHero}>选择角色</div>
                </div>
                <div style={{display: this.state.tab === 'load' ? 'block' : 'none', marginTop: 16, minHeight: 0,
                    width: '50vw'}}>
                    <LoadCharacter ref={(e)=>{this.loadChar=e}}/>
                </div>
                <div style={{display: this.state.tab === 'newChar' ? 'block' : 'none', flex: 1}}>
                    <NewCharacter onComplete={this.loadHero}/>
                </div>
            </div>
        )
    }
}

export default Character;