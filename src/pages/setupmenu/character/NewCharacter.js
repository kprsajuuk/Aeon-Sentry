import React, { Component } from "react";
import { Button, NumberPicker, Input } from '@/component/element/element';
import './NewCharacter.scss';

const infojson = [{title: '名称', data: ''}, {title: '年龄', data: ''}, {title: '婚姻状态', data: ''},
    {title: '托福成绩', data: ''},{title: '武器', data: ''}];

class NewCharacter extends Component {
    state = {
        name: undefined,
        totalPoint: 10,
        attributes: {att: 3, def: 3, spe: 3, ran: 3, mag: 3},
    };

    componentDidMount(){
    }

    numberUpdate = (attr, n) => {
        let { attributes, totalPoint } = this.state;
        if (totalPoint -n >= 0 && (attributes[attr] > 0 || n > 0)){
            attributes[attr] += n;
            totalPoint -= n;
        }
        this.setState({
            attributes,
            totalPoint,
        })
    };

    nameUpdate = (name) => {
        this.setState({
            name: name,
        })
    };

    complete = () => {
        const { attributes } = this.state;
        let formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('attack', attributes.att);
        formData.append('defense', attributes.def);
        formData.append('speed', attributes.spe);
        formData.append('range', attributes.ran);
        formData.append('magic', attributes.mag);
        formData.append('comment', 'something here');
        fetch(`/createHero/`, {
            method: 'post',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success){
                    console.log('success');
                }
            })
    };

    render(){
        const { attributes } = this.state;
        return (
            <div>
                <div style={{display: 'flex'}}>
                    <div style={{padding: 16}}>
                        <div>基础属性</div>
                        <div className='as-nc-attr'>总剩余点数: {this.state.totalPoint}</div>
                        <div className='as-nc-attr'>
                            <span>攻</span>
                            <NumberPicker value={attributes.att} attr='att' onChange={this.numberUpdate}/>
                        </div>
                        <div className='as-nc-attr'>
                            <span>守</span>
                            <NumberPicker value={attributes.def} attr='def' onChange={this.numberUpdate}/>
                        </div>
                        <div className='as-nc-attr'>
                            <span>速</span>
                            <NumberPicker value={attributes.spe} attr='spe' onChange={this.numberUpdate}/>
                        </div>
                        <div className='as-nc-attr'>
                            <span>范</span>
                            <NumberPicker value={attributes.ran} attr='ran' onChange={this.numberUpdate}/>
                        </div>
                        <div className='as-nc-attr'>
                            <span>魔</span>
                            <NumberPicker value={attributes.mag} attr='mag' onChange={this.numberUpdate}/>
                        </div>
                    </div>
                    <div style={{padding: 16}}>
                        <div>资料信息</div>
                        <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
                            <div className='as-nc-info'>
                                <span style={{paddingRight: 12}}>名称</span>
                                <Input onChange={this.nameUpdate} style={{width: 100}}/>
                            </div>
                        {
                            infojson.map((item, index) => {
                                return (
                                    <div key={index} className='as-nc-info'>
                                        <span style={{paddingRight: 12}}>{item.title}</span>
                                        <Input style={{width: 100}}/>
                                    </div>
                                    )
                            })
                        }
                        </div>
                    </div>
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button onClick={this.complete}>Complete</Button>
                </div>
            </div>
        )
    }
}

export default NewCharacter;