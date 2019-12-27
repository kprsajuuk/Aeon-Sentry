import React, { Component } from "react";
import { exp_bound } from "@/preference/hero";
import { Tooltip } from "@/component/element/element";
import './Status.scss';

class Status extends Component {
    state = {
        hero: this.props.hero || {},
    };

    componentDidMount(){
    }

    componentDidUpdate(prevProps){
        if (this.props.hero !== prevProps.hero){
            this.setState({
                hero: this.props.hero || {},
            });
        }
    }


    render(){
        const { hero } = this.state;
        const dmg = (attack, charge) => {
            return (Number(attack) + Number(charge)) * (Number(charge) + 1);
        };
        return (
            <div className='hero-status'>
                <div className='hero-title'>
                    <div>{hero.name}</div>
                    <div className='hero-lv'>Lv{hero.lv}</div>
                </div>
                <div className='hero-hp border-2'>
                    <div className='hero-hp-bar' style={{width: `${100*Math.min(Math.max(hero.hp, 0)/hero.max_hp, 1)}%`}}>
                        血量:{Math.max(hero.hp, 0)}
                    </div>
                </div>
                {(hero.exp || hero.exp === 0) &&
                    <div className='hero-exp-bar' style={{width: 100*hero.exp/exp_bound()[hero.lv+1] + '%'}}> </div>
                }
                <div className='hero-attr'>
                    <Tooltip tip={`伤害： ${dmg(hero.attack, hero.charge)}`}><div>攻击力:{hero.attack}</div></Tooltip>
                    <div>蓄力:{hero.charge}</div>
                    <div>体力:{hero.stamina}/{hero.max_stamina}</div>
                </div>
                <div className='hero-des'>{hero.description}</div>
            </div>
        )
    }
}

export default Status;