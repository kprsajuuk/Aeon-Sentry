import React, { Component } from "react";
import {Button, Input, Modal} from '@/component/element/element';
import './Register.scss';

class Register extends Component {
    state = {
        showModal: false,
        username: '',
        password: '',
    };

    componentDidMount(){
    };

    requestRegister = () => {
        this.setState({showModal: true});
        return;
        let formData = new FormData();
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        formData.append('confirm_password', this.state.password);
        fetch(`/register/`, {
            method: 'post',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    changeUsername = (value) => {
        this.setState({
            username: value,
        })
    };

    changePassword = (value) => {
        this.setState({
            password: value,
        })
    };

    closeModal = () => {
        this.setState({
            showModal: false,
        })
    };

    back = () => {
        this.props.history.push('/');
    };

    render(){
        return (
            <div className='flex-mid'>
                <div style={{width: 200, textAlign: 'center'}}>
                    <div style={{marginBottom: 10}}>I AM LOGO</div>
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
                        <Button onClick={this.back}>返回</Button>
                    </div>
                </div>
                <Modal display={this.state.showModal} onClose={this.closeModal}>
                    <p>目前暂不开放注册，仅限邀请</p>
                </Modal>
            </div>
        )
    }
}

export default Register;