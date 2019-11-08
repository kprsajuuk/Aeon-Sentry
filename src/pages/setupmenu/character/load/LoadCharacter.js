import React, { Component } from "react";
import { Button } from '@/component/element/element';
import CharacterListItem from './CharacterListItem';
import './LoadCharacter.scss';

class LoadCharacter extends Component {
    state = {
        characters: [],
        selectedChar: null,
    };

    componentDidMount(){
        /**
         * @param res {{avatars: json}} - 角色信息.
         */
        this.loadAllHero();
    }

    loadAllHero = () => {
        fetch(`/loadAllHero/`)
            .then(res => res.json())
            .then(res => {
                if (res.success){
                    this.setState({
                        characters: res.avatars,
                    })
                }
            })
    }

    onSelect = (item) => {
        if (this.state.selectedChar && this.state.selectedChar !== item){
            this.state.selectedChar.unSelect();
        }
        this.setState({
            selectedChar: item,
        })
    }

    confirmSelect = () => {
        let formData = new FormData();
        formData.append('selectChar', this.state.selectedChar.getCharacterId())
        fetch(`/selectHero/`, {
            method: 'post',
            body: formData,
        })
            .then(res => res.json())
            .then(res => {
                if (res.success){
                    window.location.href="/floor";
                }
            })
        return;
    };

    render(){
        return (
            <div>
                <div style={{marginBottom: 12}}>
                    {
                        this.state.characters.map((item, index)=>{
                            return (<CharacterListItem data={item} key={index} onSelect={this.onSelect}/>)
                        })
                    }
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button onClick={this.confirmSelect}>Complete</Button>
                </div>
            </div>
        )
    }
}

export default LoadCharacter;