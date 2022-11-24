import React, { Component } from 'react';
import Home from './Home';

export default class App extends Component {

  componentDidUpdate(){
//alert('you are updating')
  }
  state={count:0,show: false, text:"",finalText:"",Array:['text1','text2'],valtemp:""};
  handleIncrement=()=>{
    this.setState({count:this.state.count+1});
  }
  handledecrement=()=>{
   this.state.count > 0 && this.setState ({count: this.state.count -1})
  }

handleshow=()=>{
  this.state.show ? this.setState ({show:false}) : this.setState({show:true});
}
handleChange=(e)=>{
  e.preventDefault();
this.setState({...this.state,text:e.target.value}); 
}
handleSubmit=(event)=>{
  event.preventdefault();

  

};

handlechangetext=(e)=>{
let text=e.target.value;
this.setState({...this.state,valtemp:text})

}
handleSubmittext=(e)=>{
  e.preventDefault();
  this.setState({...this.state,Array:[...this.state.Array,this.state.text]})
  console.log(this.state)

}

  render () {
    return ( <>
      <div style={{ justifycontent:"center" , display: "flex"}}>
        <button onClick={this.handleIncrement}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handledecrement}>-</button>
      </div>
     <button onClick={this.handleshow}>Show</button>
     {this.state.show && <Home/>}
     <form onSubmit={this.handleSubmit}>
     <input onChange={this.handleChange} value={this.state.text}/>
     <button type='submit'>Submit</button>
     </form>



     <form onSubmit={this.handleSubmittext}>
     <input type={'text'}  onChange={this.handlechangetext}/>
  <button type='submit'>submit</button>
     </form>

     <div>
      {this.state.Array.map((elt,index)=>(<h1 key={index}>{elt}</h1>))}
     </div>

    </>
    )
  }
}


