import React, { Component } from "react";
import {Button, Input, Modal} from '@/component/element/element';
import './Login.scss';

class Login extends Component {
    state = {
        username: '',
        password: '',
        ready: true,
        showModal: false,
        errorText: '',
    };

    componentDidMount(){
    }

    closeModal = () => {
        this.setState({
            showModal: false,
        })
    };

    requestLogin = () => {
        this.setState({ready: false})
        let formData = new FormData();
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        fetch(`/login/`, {
            method: 'post',
            body: formData,
        })
            .then(res => res.json())
            .then(res => {
                if (res.success){
                    setTimeout(()=>{this.props.history.push('/setup')},1000);
                } else {
                    this.setState({
                        showModal: true,
                        errorText: res.msg,
                    })
                }
                this.setState({ready: true,});
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

    back = () => {
        this.props.history.push('/');
    };

    render(){
        return (
            <div className='flex-mid'>
                <div style={{width: 200, textAlign: 'center'}}>
                    <div style={{marginBottom: 10}}>I AM LOGO</div>
                    <div>
                        <div>登录</div>
                        <form style={{marginBottom: 10, textAlign: 'left'}}>
                            <div style={{marginBottom: 10}}>用户名
                                <Input value={this.state.username} onChange={this.changeUsername}
                                       placeholder="用户名" name='username'/>
                            </div>
                            <div>密码
                                <Input value={this.state.password} onChange={this.changePassword}
                                       placeholder='密码' password='password' type='password'/></div>
                        </form>
                        <Button disabled={!this.state.ready} onClick={this.requestLogin}>登录</Button>
                        <Button disabled={!this.state.ready} onClick={this.back}>返回</Button>
                    </div>
                </div>
                <Modal display={this.state.showModal} onClose={this.closeModal}>
                    <p style={{textAlign: 'center'}}>{this.state.errorText}</p>
                </Modal>
            </div>
        )
    }
}

export default Login;