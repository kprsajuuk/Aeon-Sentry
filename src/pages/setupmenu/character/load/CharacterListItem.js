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

    getCharacterId(){
        /**
         * @param data {{avatar_id: string}} - 角色id
         */
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
        });
        this.props.onSelect(this)
    };

    render(){
        return (
            /**
             * @param data {{defense: string, magic: string}} - 角色属性.
             */
            <div className={`cli${this.state.selected ? ' selected' : ''}`} onClick={this.onSelect}>
                <div>名称: {this.state.data.name}</div>
                <div className='cli-attr'>
                    <div>攻击: {this.state.data.attack}</div>
                    <div style={{margin: '0 10px'}}>守: {this.state.data.defense}</div>
                    <div>速: {this.state.data.speed}</div>
                </div>
            </div>
        )
    }
}

export default CharacterListItem;