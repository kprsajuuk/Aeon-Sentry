import React, { Component } from "react";
import {Button, Input, Modal} from '@/component/element/element';
import './Register.scss';

class Register extends Component {
    state = {
        show: false,
        username: '',
        password: '',
    }

    componentDidMount(){
    }

    requestRegister = () => {
        this.setState({
            show: true,
        })
        return;
    }

    changeUsername = (value) => {
        this.setState({
            username: value,
        })
    }

    changePassword = (value) => {
        this.setState({
            password: value,
        })
    }

    closeModal = () => {
        this.setState({
            show: false,
        })
    }

    render(){
        return (
            <div>
                <div>注册</div>
                <form style={{marginBottom: 10, textAlign: 'left'}}>
                    <div style={{marginBottom: 10}}>用户名
                        <Input value={this.state.username} onChange={this.changeUsername}
                               placeholder="用户名" name='username'/>
                    </div>
                    <div>密码
                        <Input value={this.state.password} onChange={this.changePassword}
                               placeholder='密码' password='password' type='password'/></div>
                </form>
                <Button onClick={this.requestRegister}>注册</Button>
                <Button onClick={this.props.back}>返回</Button>
                <Modal display={this.state.show} onClose={this.closeModal}>
                    <p>目前暂不开放注册，仅限邀请</p>
                </Modal>
            </div>
        )
    }
}

export default Register;