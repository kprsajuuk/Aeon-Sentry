import React, { Component } from "react";
import { Button, NumberPicker, Input } from '@/component/element/element';
import './NewCharacter.scss';

const infojson = [{title: '名称', data: ''}, {title: '年龄', data: ''}, {title: '婚姻状态', data: ''},
    {title: '托福成绩', data: ''}];

class NewCharacter extends Component {
    state = {
        totalPoint: 10,
        attributes: {att: 3, def: 3, spe: 3, ran: 3, mag: 3},
    }

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
    }

    render(){
        const { attributes } = this.state
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
                        {
                            infojson.map((item) => {
                                return (
                                    <div className='as-nc-info'>
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
                <Button>Complete</Button>
                </div>
            </div>
        )
    }
}

export default NewCharacter;