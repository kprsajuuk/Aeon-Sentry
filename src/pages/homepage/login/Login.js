import React, { Component } from "react";
import { Button, Input } from '@/component/element/element';
import './Login.scss';

class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    componentDidMount(){
    }

    requestLogin = () => {
        let formData = new FormData();
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        fetch(`http://localhost:8077/login/`, {
            method: 'post',
            body: formData,
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
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

    render(){
        return (
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
                <Button onClick={this.requestLogin}>登录</Button>
                <Button onClick={this.props.back}>返回</Button>
            </div>
        )
    }
}

export default Login;