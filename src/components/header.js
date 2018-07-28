import React,{Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

    if(this.props.login.loggedin) {
      return(
        <div className='aae-section__container header'>
          Success!
        </div>
      );
    }

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
                value={this.state.email}
                onChange={this.handleEmailChange}
                className='email'
                placeholder='Email...'/>
              <div className='input-label'> PASSWORD </div>
              <input type='password'
                value={this.state.password}
                onChange={this.handlePasswordChange}
                className='email'
                placeholder='Password...'/>
              <button type='submit'
              onClick={this.handleSubmit}
              className='submit-button'> Login </button>
              </div>
          </div>
        </div>
      </div>
    );
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

}

export default Header;
