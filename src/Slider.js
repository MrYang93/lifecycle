import React from 'react';


export default class Slider extends React.Component{
  constructor(){
      super();
      this.state={
        nowScroll:0  //0是第一张
      }
  }
  scroll(num){
    let next=this.state.nowScroll+num;
    if (next>=this.props.imgs.length) {
      return this.setState({nowScroll:0})
    }
    if (next<0) {
      return this.setState({nowScroll:this.props.imgs.length-1})
    }
      return this.setState({nowScroll:next})
  }

  handleClick(which){
    clearInterval(this.interval);
    this.scroll(which);
    this.goPlay();
  }

  handleClick(index){
    let n = index - this.state.nowScroll;
    clearInterval(this.interval);
    this.scroll(n);
    this.goPlay();
  }

  goPlay(){ //启动计时器,自动播放
    this.interval = setInterval(()=>this.scroll(1),2000)
  }

  componentDidMount(){
    this.goPlay();
  }

  render(){
    let liWidth = 100/this.props.imgs.length+'%';
    let styles ={
      ul: {
        width: this.props.imgs.length*100+'%',
        left: -this.state.nowScroll*100+'%'
      }
    }
    return(
      <div className="slider-wrap">
        <ul style={styles.ul}>
          {this.props.imgs.map( item =>
          <li key={Math.random()} style={{ width:liWidth,backgroundImage:`url(${item})`}}></li>)}
          {/* <li style={{width:'33.3%',backgroundImage:`url(${Img1})`}}></li>
          <li style={{width:'33.3%',backgroundImage:`url(${Img1})`}}></li>
          <li style={{width:'33.3%',backgroundImage:`url(${Img1})`}}></li> */}
        </ul>
        <button className='arrow left' onClick={this.handleClick.bind(this,this.state.nowScroll+1)}> &lt; </button>
        <button className='arrow right' onClick={this.handleClick.bind(this,this.state.nowScroll-1)}> &gt; </button>

        <div className='dotted'>
          {
            this.props.imgs.map((item,index)=>
            <span key={Math.random()}
            onClick={this.handleClick.bind(this,index)}
            style={{backgroundColor: this.state.nowScroll==index?'#fff':'#888'}}></span>)
          }
        </div>
      </div>
    )
  }
}
