import React, { Component } from "react";
import { Button } from '@/component/element/element';
import './StatusBtn.scss';

class StatusBtn extends Component {
    state = {
        hero: this.props.hero || {},
    };

    componentDidMount(){
    }

    componentDidUpdate(prevProps){
        if (this.props.hero !== prevProps.hero){
            this.setState({
                hero: this.props.hero || {},
                show: 0,
            });
        }
    }

    showPopup = (num) => {
        if (num === this.state.show){
            num = 0;
        }
        this.setState({
            show: num,
        });
    };

    upgradePoint = (type) => {
        if (!this.state.hero.skill_points){
            return;
        }
        let upgrade = {type: type, num: 1};
        this.props.onUpgrade(upgrade)
    };


    render(){
        const { hero } = this.state;
        return (
            <div>
                <div>
                    <Button onClick={()=>this.showPopup(1)} className='border-2'
                            style={{padding: "5px 10px", marginRight: 16}} disabled={!hero.skill_points}>升级</Button>
                    <Button onClick={()=>this.showPopup(2)} className='border-2'
                            style={{padding: "5px 10px"}}>描述</Button>
                </div>
                <div className='statusBtn-popup' style={{zIndex: 1}}>
                    {this.state.show === 1 &&
                    <div className='statusBtn-popup-upgrade'>
                        <div>多余技能点: {hero.skill_points || 0}</div>
                        <div style={{display: "flex", marginTop: 6}}
                             className={hero.skill_points && hero.skill_points > 0 ? 'enable' : ''}>
                            <div onClick={()=>this.upgradePoint('attack')}
                                 className='card-option border trans-anim'>攻: {hero.attack}</div>
                            <div onClick={()=>this.upgradePoint('defense')}
                                 className='card-option border trans-anim' style={{margin: "0 6px"}}>守: {hero.defense}</div>
                            <div onClick={()=>this.upgradePoint('speed')}
                                 className='card-option border trans-anim'>速: {hero.speed}</div>
                        </div>
                    </div>}
                    {this.state.show === 2 &&
                    <div className='statusBtn-popup-info'>
                        <div>-守-决定最大血量上限</div>
                        <div>-速-决定最大体力上限</div>
                        <div>-实际伤害公式-<br/>(攻+蓄力) x (蓄力+1)</div>
                    </div>}
                </div>
            </div>
        )
    }
}

export default StatusBtn;