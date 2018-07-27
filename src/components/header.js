import React,{Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div className='aae-section__container header'>
        <img id='logo-image' src={`../../style/images/${this.props.logoImage}`}/>
        <div className='title'> {this.props.title} </div>
        <div className='wrapper-container'>
          <div className='wrapper left'>
            <img id='main-splash' src={`../../style/images/${this.props.mainSplashImage}`}/>
          </div>
          <div className='wrapper right'>
          </div>
        </div>      
      </div>
    );
  }
}

export default Header;
