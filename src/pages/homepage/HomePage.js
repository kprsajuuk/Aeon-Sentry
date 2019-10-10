import React, { Component } from "react";
import { Button } from '@/component/element/element';
import Login from './login/Login';
import Register from './register/Register';
//import './HomePage.scss';

class HomePage extends Component {
    state = {
        step: 'main',
    }

    componentDidMount(){
    }

    test = () => {
        fetch(`http://localhost:8077/login/`, {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    changeStep = (s) => {
        this.setState({
            step: s,
        })
    }

    render(){
        return (
            <div className='flex-mid'>
                <div style={{width: 200, textAlign: 'center'}}>
                    <div style={{marginBottom: 10}}>I AM LOGO</div>
                    {this.state.step === 'main' &&
                    <div>
                        <Button onClick={()=>this.changeStep('log')}>登录</Button>
                        <Button onClick={()=>this.changeStep('reg')}>注册</Button>
                    </div>}
                    {this.state.step === 'log' &&
                    <Login back={()=>this.changeStep('main')}/>}
                    {this.state.step === 'reg' &&
                    <Register back={()=>this.changeStep('main')}/>}
                </div>
            </div>
        )
    }
}

export default HomePage;