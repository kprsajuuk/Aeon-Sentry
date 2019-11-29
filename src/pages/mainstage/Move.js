import React, { Component } from "react";
import { Button } from '@/component/element/element';
import './Move.scss';

class Move extends Component {
    state = {
        path: this.props.event.path || [],
    };

    componentDidUpdate(prevProps){
        if (this.props.event !== prevProps.event){
            this.setState({
                path: this.props.event.path || [],
            })
        }
    }

    onAction = (act) => {
        this.props.onAction(act);
    };

    render(){
        const { path } = this.state
        return (
            <div>
                {this.props.event.name === 'start' &&
                <div>
                    <Button disabled={!this.props.ready} onClick={()=>this.onAction('start')}>开始</Button>
                </div>
                }
                {this.props.event.name === 'move' &&
                <div className='move-btn-box'>
                    {this.props.event.path &&
                        ['t', 'r', 'b', 'l'].map((item, index) => {
                            let json = {'t': '前进', 'r': '右', 'b': '后退', 'l': '左'};
                            return (
                                <div key={index} className={`absolute-mid border move-btn ${item}`}>
                                    {path.indexOf(item) < 0 &&
                                    <Button disabled style={{padding: 6, width: "100%", height: "100%"}}>
                                        {json[item]}
                                    </Button>
                                    }
                                    {path.indexOf(item) >= 0 &&
                                    <Button onClick={()=>this.onAction(item)}
                                            style={{padding: 6, width: "100%", height: "100%"}}>
                                        {json[item]}
                                    </Button>
                                    }
                                </div>
                                )
                        })
                    }
                </div>
                }
            </div>
        )
    }
}

export default Move;