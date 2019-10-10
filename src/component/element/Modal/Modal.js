import React, { Component } from "react";
import './Modal.scss';

class Modal extends Component {
    state = {

    }

    componentDidMount(){
    }

    closeModal = () => {
        this.props.onClose();
    }

    render(){
        return (
            <div style={{visibility: this.props.display ? "visible" : "hidden"}}
                 className={this.props.display ? 'as-modal visible' : 'as-modal'}>
                <div className='as-modal-overlay' onClick={this.closeModal}></div>
                <div className='as-modal-content as-modal-trans'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal;