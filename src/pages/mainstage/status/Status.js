import React, { Component } from "react";
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
        return (
            <div className='hero-status'>
                <div className='hero-title'>
                    <div>{hero.name}</div>
                    <div className='hero-lv'>Lv{hero.lv}</div>
                </div>
                <div className='hero-hp border-2'>
                    <div className='hero-hp-bar' style={{width: `${100*Math.min(hero.hp/hero.max_hp, 1)}%`}}>
                        血量:{hero.hp}
                    </div>
                </div>
                <div className='hero-attr'>
                    <div>攻击力:{hero.attack}</div>
                    <div>蓄力:{hero.charge}</div>
                    <div>体力:{hero.stamina}</div>
                </div>
                <div className='hero-des'>{hero.description}</div>
            </div>
        )
    }
}

export default Status;