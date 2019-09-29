import React, { Component } from "react";
import { Button } from '@/component/element/element';
import './Login.scss';

class Login extends Component {
    state = {

    }

    componentDidMount(){
    }

    requestLogin = () => {
        fetch(`http://localhost:8077/login/`, {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    render(){
        return (
            <div>
                <form>
                    <div>用户名</div>
                    <div><input/></div>
                    <div>密码</div>
                    <div><input type='password'/></div>
                </form>
                <Button onClick={this.requestLogin}>确认</Button>
                <Button onClick={this.props.back}>返回</Button>
            </div>
        )
    }
}

export default Login;