import React, { Component } from "react";
import { Button } from '@/component/element/element';
import './Register.scss';

class Register extends Component {
    state = {

    }

    componentDidMount(){
    }

    requestRegister = () => {
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
                用户名
                <input/>
                密码
                <input/>
                <Button onClick={this.requestRegister}>确认</Button>
                <Button onClick={this.props.back}>返回</Button>
            </div>
        )
    }
}

export default Register;