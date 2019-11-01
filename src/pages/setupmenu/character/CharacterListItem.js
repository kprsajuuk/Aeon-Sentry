import React, { Component } from "react";
import './CharacterListItem.scss';

class CharacterListItem extends Component {
    state = {
        data: this.props.data,
        selected: false,
    };

    componentDidMount(){
    }

    getCharacterId(){
        return this.state.data.id;
    }

    unSelect(){
        this.setState({
            selected: false,
        })
    }

    onSelect = () => {
        this.setState({
            selected: true,
        })
        this.props.onSelect(this)
    };

    render(){
        return (
            /**
             * @param data {{defense: string, magic: string}} - 角色属性.
             */
            <div className={`cli${this.state.selected ? ' selected' : ''}`} onClick={this.onSelect}>
                <div>{this.state.data.name}</div>
                <div className='cli-attr'>
                    <div>攻: {this.state.data.attack}</div>
                    <div>守: {this.state.data.defense}</div>
                    <div>速: {this.state.data.speed}</div>
                    <div>范: {this.state.data.range}</div>
                    <div>魔: {this.state.data.magic}</div>
                </div>
            </div>
        )
    }
}

export default CharacterListItem;