import React from 'react';

export default class Text extends React.Component{
  constructor(){
      super();
  }
componentWillReceiveProps(nextProps){
  console.log('will receive props===',nextProps);
}

componentWillUpdate(){
  console.log('child===will update');
}

componentWillUnmount(){
  console.log('我要被销毁了');
}

  render(){
    return(
      <div>我是Text组件{this.props.childNum}</div>
    )
  }
}
