import React from "react";
import '../../App.css';

export default class Modal extends React.Component {
  render() {
    if(!this.props.show){
      return null;
    }
    return (
      <div className="modal_backdrop">
        <div className="modal_body">
          {this.props.children}
          <div>
            <button
              className="modal_close"
              onClick={this.props.onClose}
            >
              Closer
            </button>
          </div>
        </div>
      </div>
    );
  }
}