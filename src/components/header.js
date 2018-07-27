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
            <img src={`../../style/images/${this.props.mainSplashImage}`}/>
          </div>
          <div className='wrapper right'>
            <div className='login-form'>
              <div className='form-title'>
                Your personal wallet
              </div>

              <div className='form-subtitle'>
                Check your wallet balance, top up your cards and search through
                your payment history on the web wallet.
                <div
                  className='request-navigate-wrapper'
                  onClick = {this.props.navigateFunction }>
                  <a> Request access.</a>
                </div>
              </div>

              <div className='input-label'> EMAIL </div>
              <input type='text'
                className='email'
                placeholder='Email...'/>
              <div className='input-label'> PASSWORD </div>
              <input type='password'
                className='email'
                placeholder='Password...'/>
              <button type='submit' className='submit-button'> Login </button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
