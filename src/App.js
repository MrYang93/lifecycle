import React from 'react';

import Text from './Text';
import Slider from './Slider.js';

import Img1 from './images/1.jpg'
import Img2 from './images/2.jpg'
import Img3 from './images/3.jpg'
let imgs = [Img1,Img2,Img3]


class App extends React.Component{
  constructor(){
    super();
    this.state={num:0, show: true}
    console.log('initial state');
  }

  componentWillMount(){
    console.log('will mount');
  }
  componentWillReceiveProps(nextProps){
    console.log('will receive props===',nextProps);
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('should update===',nextProps,nextState);
    if (nextState.num<5) {
      return true
    }
    return false
    //输入false 后面就停止了
  }

  componentWillUpdate(nextProps,nextState){
    console.log('will pdate===',nextProps,nextState);
  }

  componentDidUpdate(prevProps,prevState){
    console.log('did update===',prevProps,prevState);
  }

    render(){
      console.log('render');
      return(
        <div>
          <div>
            <Slider imgs={imgs}/>
          </div>
          <div>
            数值{this.state.num}
            <button onClick={()=>this.setState({num:this.state.num+1})}>click</button>
            <button onClick={()=>this.setState({show: false})}>销毁Text</button>
            <button onClick={()=>this.setState({show: true})}>恢复Text</button>
            {this.state.show?<Text childNum={this.state.num} />:null}
          </div>
        </div>
      )
    }

    componentDidMount(){
      console.log('did mount');
    }
}
export default App;


// 1.初始化，首次渲染
// constructor
// componentWillMount
// render
// componentDidMount
// 2.更新阶段(state,props发生变化时触发)
// componentWillReceiveProps
// shouldComponentUpdate
// componentWillUpdate
// render
// componenrDidUpdate

//3消除componentWillUnmount
