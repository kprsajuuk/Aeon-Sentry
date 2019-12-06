import React, { Component } from "react";
import './Map.scss';

class Map extends Component {
    state = {
        roomMap: this.props.map.rooms || [],
        userCoor: this.props.map.userCoor || '',
        pos: [0,0],
        expand: false,
    };

    componentDidMount(){
        this.updateFocus();
    }

    componentDidUpdate(prevProps){
        if (this.props.map !== prevProps.map){
            this.setState({
                roomMap: this.props.map.rooms || [],
                userCoor: this.props.map.userCoor || '',
            }, () => {
                this.updateFocus();
            })
        }
    }

    toggleExpand = () => {
        this.setState({
            expand: !this.state.expand,
        }, () => {
            if (this.state.expand){
                let list = this.state.roomMap;
                let midRoom = list[Math.floor((list.length-1)/2)];
                this.updateMapPos(midRoom.coor);
            } else {
                this.updateFocus();
            }
        });
    };

    updateFocus = () => {
        let list = this.state.roomMap;
        let userRoom = {};
        for (let i=0; i<list.length; i++){
            if (list[i].user){
                userRoom = list[i];
                break
            }
        }
        this.updateMapPos(userRoom.coor);
    };

    updateMapPos = (coor) => {
        if(!coor || coor.length !== 2){
            return;
        }
        let top = -(coor[0] - 1) * 78 - 39;
        let left = -(coor[1] - 1) * 78 - 39;
        this.setState({
            pos: [top, left],
        });
    };


    render(){
        return (
            <div className={`stage-map-box${this.state.expand ? ' expand' : ''}`}>
                {!this.state.expand &&
                    <div className='stage-map-open' onClick={this.toggleExpand}>&nbsp;</div>
                }
                {this.state.expand &&
                    <div onClick={this.toggleExpand} className='stage-map-close'>CLOSE</div>
                }
                <div className='absolute-mid'>
                    <div className='stage-map' style={{top: this.state.pos[0], left: this.state.pos[1]}}>
                        {this.state.roomMap.map((item, index) => {
                            return (<Room key={index} data={item}/>)
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
                {this.props.data.show &&
                <div className='room-main'>
                    {this.props.data.user &&
                        <div className='room-main-user absolute-mid'>&nbsp;</div>
                    }
                    {this.props.data.act &&
                        <div className='room-main-act absolute-mid'/>

                    }
                    {
                        this.props.data.path.map((item, index) => {
                            return (<div key={index} className={'path ' + item}>&nbsp;</div>)
                        })
                    }
                </div>
                }
            </div>
        )
    }
}

export default Map;