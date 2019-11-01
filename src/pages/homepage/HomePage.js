import React, { Component } from "react";
import { Button } from '@/component/element/element';

class HomePage extends Component {

    componentDidMount(){
    }

    proceed = (url) => {
        this.props.history.push(url);
    };

    logout = () => {
        fetch(`/logout/`, {
            method: 'post',
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }

    render(){
        return (
            <div className='flex-mid'>
                <Button style={{position: 'absolute', top: 0, right: 0}} onClick={this.logout}>登出</Button>
                <div style={{width: 200, textAlign: 'center'}}>
                    <div style={{marginBottom: 10}}>I AM LOGO</div>
                    <div>
                        <Button onClick={()=>this.proceed('/login')}>登录</Button>
                        <Button onClick={()=>this.proceed('/register')}>注册</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;