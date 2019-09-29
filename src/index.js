import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AeonComponent extends Component {

    test = () => {
        fetch(`http://localhost:8077/login/`, {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    render() {
        return (
            <div>
                <button onClick={this.test}>abc</button>
                Aeon
            </div>
        )
    }
}

ReactDOM.render(<AeonComponent />, document.getElementById('root'))