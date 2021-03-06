import React, { Component } from "react";
import { Button, NumberPicker, Input, Tooltip } from '@/component/element/element';
import './NewCharacter.scss';

class NewCharacter extends Component {
    state = {
        name: undefined,
        totalPoint: 3,
        attributes: {att: 3, def: 2, spe: 2},
        infoData: [{title: '年龄', data: ''}, {title: '婚姻状态', data: ''}, {title: '托福成绩', data: ''},
            {title: '武器', data: ''}],
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

    infoUpdate = (index, value) => {
        let { infoData } = this.state;
        infoData[index].data = value;
        this.setState({infoData});
    };

    complete = () => {
        const { attributes } = this.state;
        let formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('attack', attributes.att);
        formData.append('defense', attributes.def);
        formData.append('speed', attributes.spe);
        formData.append('comment', this.state.infoData);
        fetch(`/createHero/`, {
            method: 'post',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                /**
                 * @method onComplete: void - 创建成功
                 */
                if (data.success){
                    this.props.onComplete();
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
                            <Tooltip tip='每点守增加五点生命'>
                                <span>守</span>
                                <NumberPicker value={attributes.def} attr='def' onChange={this.numberUpdate}/>
                            </Tooltip>
                        </div>
                        <div className='as-nc-attr'>
                            <Tooltip tip='最大体力，决定闪避次数'>
                                <span>速</span>
                                <NumberPicker value={attributes.spe} attr='spe' onChange={this.numberUpdate}/>
                            </Tooltip>
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
                            this.state.infoData.map((item, index) => {
                                return (
                                    <div key={index} className='as-nc-info'>
                                        <span style={{paddingRight: 12}}>{item.title}</span>
                                        <Input onChange={(v)=>this.infoUpdate(index, v)} style={{width: 100}}/>
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