import React, { Component } from "react";
import './Test.scss';

class Test extends Component {
    state = {
        roomMap: [
            {type: 0},{type: 0},{type: 1, path: ['b']},{type: 0},{type: 0},
            {type: 0},{type: 1, path: ['r']},{type: 1, path: ['l','t','b']},{type: 0},{type: 0},
            {type: 0},{type: 0},{type: 1, path: ['t','r','b']},{type: 1, path: ['l','r']},{type: 1, path: ['l', 'b']},
            {type: 1, path: ['r','b']},{type: 1, path: ['r','l']},{type: 1, path: ['t','b','l']},{type: 0},{type: 1, path: ['t']},
            {type: 1, path: ['t','r']},{type: 1, path: ['r','l']},{type: 1, path: ['t','r','l']},{type: 1, path: ['l']},{type: 0},
        ]
    };

    componentDidMount(){
    }


    render(){
        return (
            <div>
                <div className='absolute-mid'>
                    <div className='map'>
                        {this.state.roomMap.map((item) => {
                            return (<Room data={item}/>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

class Room extends Component {
    state={
    };
    render(){
        return (
            <div className='room-box'>
                {this.props.data.type !== 0 &&
                <div className='room-main'>
                    {this.props.data.user &&
                    <div className='room-main-user absolute-mid'></div>
                    }

                    {
                        this.props.data.path.map((item) => {
                            return (<div className={'path ' + item}></div>)
                        })
                    }
                </div>
                }
            </div>
        )
    }
}

export default Test;