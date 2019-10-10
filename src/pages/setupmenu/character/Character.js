import React, { Component } from "react";
import { Button } from '@/component/element/element';
import NewCharacter from "./NewCharacter";
import './Character.scss';

class Character extends Component {
    state = {
        tab: '',
    }

    componentDidMount(){
    }

    changeSection = (tab) => {
        this.setState({
            tab: tab,
        })
    }

    render(){
        return (
            <div className='as-char-main'>
                <div className='as-char-title-box'>
                    <div className='tab-button' onClick={()=>this.changeSection('newChar')}>新建角色</div>
                    <div className='tab-button' onClick={()=>this.changeSection('load')}>读取角色</div>
                </div>
                {this.state.tab === 'load' &&
                    <div style={{marginTop: 16}}>
                        存档列表
                    </div>
                }
                {this.state.tab === 'newChar' &&
                    <div style={{flex: 1}}>
                        <NewCharacter/>
                    </div>
                }
            </div>
        )
    }
}

export default Character;