import React, { Component } from "react";
import './Modal.scss';

class Modal extends Component {
    state = {
        showClose: this.props.showClose === undefined ? true : this.props.showClose,
        maskClose: this.props.maskClose === undefined ? true : this.props.maskClose,
    };

    componentDidMount(){
    }

    closeModal = () => {
        /**
         * @param props {{onClose: function}} - 角色id
         */
        this.props.onClose();
    };

    render(){
        return (
            <div style={{visibility: this.props.display ? "visible" : "hidden"}}
                 className={this.props.display ? 'as-modal visible' : 'as-modal'}>
                <div className='as-modal-overlay' onClick={this.closeModal}> </div>
                <div className='as-modal-content as-modal-trans'>
                    {this.state.showClose &&
                        <div onClick={this.closeModal} className='as-modal-close-icon'>x</div>
                    }
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal;