import React, {Component} from 'react';

class SizeSetting extends Component {

  changeSize(value){
    this.props.onChangeSize(value)
  }
  render(){
    return (
          <div className="col-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">
                  size: {this.props.fontSize} px
                </h3>
              </div>
              <button className="btn btn-primary" onClick= {()=> this.changeSize(2)}>Tang</button>
              <button className="btn btn-warning" onClick= {()=> this.changeSize(-2)}>giam</button>
            </div>
          </div>
    );
  }
}

export default SizeSetting;
