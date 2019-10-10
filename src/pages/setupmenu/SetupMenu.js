import React, { Component } from "react";
import Character from "./character/Character";
import './SetupMenu.scss';

class SetupMenu extends Component {
    state = {
        section: 'character',
    }

    componentDidMount(){
    }

    changeSection = (sec) => {
        this.setState({
            section: sec,
        })
    }

    complete = () => {

    }

    render(){
        return (
            <div className='as-sm'>
                <div className='as-sm-container'>
                    {
                        this.state.section === 'character' &&
                        <Character complete={this.complete}/>
                    }
                    {
                        this.state.section === 'complete' &&
                        <div>2233</div>
                    }
                </div>
            </div>
        )
    }
}

export default SetupMenu;