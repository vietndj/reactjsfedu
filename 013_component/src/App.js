import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="_013">
        <TopMenu/>
        <Header/>
        <div className="container"> 
        <div className="row  pt-5">
      
         <Content tieude="Cach su dung props  "  anh="img/01.jpg" trichdan="Day la trich dan so 1"/>
         <Content tieude="Tin tuc so 2 " anh="img/02.jpg"  trichdan="Day la trich dan so 2"/>
         <Content tieude="Tin so 3"   anh="img/03.jpg"  trichdan="One Page Wonder is an Bootstrap 4 starter theme for quickly creating attractive one page websites in Bootstrap."/>
         
         <Content tieude="Cach su dung props  "  anh="img/01.jpg" trichdan="Day la trich dan so 1"/>
         <Content tieude="Tin tuc so 2 " anh="img/02.jpg"  trichdan="Day la trich dan so 2"/>
         <Content tieude="Tin so 3"   anh="img/03.jpg"  trichdan="One Page Wonder is an Bootstrap 4 starter theme for quickly creating attractive one page websites in Bootstrap."/>
         <Content tieude="Cach su  props  "  anh="img/01.jpg" trichdan="Day la trich dan so 1"/>
         <Content tieude="Tin tuc so 2 " anh="img/02.jpg"  trichdan="Day la trich dan so 2"/>
         <Content tieude="Tin so 3"   anh="img/03.jpg"  trichdan="One Page Wonder is an Bootstrap 4 starter theme for quickly creating attractive one page websites in Bootstrap."/>

       
      </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default App;
