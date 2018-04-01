import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const sanpham = [
  {
    ten : "chuot",
    gia: 200000
  }
  ,
  {
    ten : "Ban phim",
    gia : 90000
  }
];

const CacSanPham =  sanpham.map((item)=>   
<div> 
  <li> ten sna pham : {item.ten} </li> 
  </div>
) 
const n1 = [1,2,3];
const n2 = n1.map((item) => item+4);

class App1 extends Component {

  handleClick(){
    alert('xxx');
    console.log('tada');
  }

  handleClick2(){
    alert('xxx');
    console.log('tada');
  }
  showButtonFree(){
    const isFree = this.props.free; 
    if(isFree === true) {
      return (
        <div>
            <button onClick={this.handleClick()}> Click vao nut  </button>
          </div>
      );
    }
  }
  render() {
    return (
      <div>
        {CacSanPham}
        <div>
            <button onClick={()=>this.handleClick()}> Click vao nut  </button>
            <button onClick={this.handleClick2}> Click vao nut  </button>
          </div>
      </div>
    );
  }
}



// ham demo phan event  

class App2 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cheDoSua :false 
    }
  }
  
  chuyenCheDoNut = () => {this.setState({chedoSua:false});}
  chuyenCheDoSua = () => {
    alert("sua di ");
    this.setState({cheDoSua:true});}

  show_info = (noidung) => {
    alert(noidung); // 6 cai component 
  }

  hienForm = () => (
    <form className="form-inline">
      <div className="form-group">
        <label htmlFor />
        <input type="text" name="r" className="form-control" placeholder="Ten " />
        <small id="helpId" className="text-muted">Help text</small>
        <button className="btn btn-primary btn-block" onClick={()=>this.chuyenCheDoNut()}  > Save </button>

      </div>
    </form>
  );

  hienNut = () => (
    <div className="btn-group">
      <button className="btn btn-info" onClick={()=>this.chuyenCheDoSua()}> Edit </button>
      <button className="btn btn-success" onClick={() => this.show_info()}> Removee </button>
      {/* <div className="btn btn-danger" onClick={this.show_info.bind(this,this.props.gia)}>Remove </div> */}
    </div>
  );

  hamHienNut = () => {
    if(this.state.cheDoSua === false){
      return this.hienNut()
    }
    else {
      return this.hienForm()
    }
  }

  render() {
    return (
      <div className="col-4">
      <div className="card text-left">
      <img className="card-img-top" src="http://placehold.it/700x400"   />
      <div className="card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab temporibus architecto, quas est harum porro ducimus maiores dicta ullam vitae hic dolore nihil beatae, asperiores deserunt quos tempore, minus fugit!</p>
        {
          this.hamHienNut()
        }

      </div>
    </div>
    </div>
    );
  }
}

// demo phan state  
 



// end demo state 
class App extends Component {
  
  
  render() {
    return (
      <div className="container">
       <div className="row">
         <App2 gia="900"/>
      </div>
    </div>
    );
  }
}

export default App;
