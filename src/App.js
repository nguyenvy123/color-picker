import React, {Component} from 'react';
import './App.css'
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color : 'red',
      fontSize: 12
    }
    this.onSetColor = this.onSetColor.bind(this)
    this.onChangeSize = this.onChangeSize.bind(this)
    this.onSettingDefault = this.onSettingDefault.bind(this)
  }

onSetColor(params){
  this.setState({
    color : params
  })
}

onChangeSize(value){
  if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
    this.setState({
        fontSize : this.state.fontSize + value
    })
  }
}
onSettingDefault(value){
  if(value === true){
    this.setState({
      color : 'red',
      fontSize: 12
    })
  }
}

render (){
  return (
    <div className="container mt-5">
      <div className="row">
          <ColorPicker color= {this.state.color} onReceiveColor = {this.onSetColor}/>
          <SizeSetting fontSize = {this.state.fontSize} onChangeSize = {this.onChangeSize} />
      </div>

      <div className="row">
        <Result color = {this.state.color} fontSize= {this.state.fontSize}/>
      </div>
      <Reset onSettingDefault = { this.onSettingDefault }/>
    </div>
  );
}
}

export default App;
