import React, { Component } from "react";
import './CharacterListItem.scss';

class CharacterListItem extends Component {
    state = {
        data: this.props.data,
        selected: false,
    };

    componentDidMount(){
    }

    componentDidUpdate(prevProps){
        if (this.props.data !== prevProps.data){
            this.setState({
                data: this.props.data || {},
                selected: false,
            });
        }
    }

    /**
     *
     * @param data {{avatar_id: string}} - 角色id
     */
    getCharacterId(){
        return this.state.data.avatar_id;
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