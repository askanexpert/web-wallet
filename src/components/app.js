import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Section from '../components/section';
import Header from '../containers/header';
import Footer from '../containers/footer';

import * as Constants from '../utils/data';

export default class App extends Component {

  handleScrollToElement(event) {
      console.log(this.refs);
      const signupNode = ReactDOM.findDOMNode(this.refs.footer)

      var i = 10;
      var int = setInterval(function() {
        window.scrollTo(0, i);
        i += 20;
        if (i >= signupNode.offsetTop) clearInterval(int);
      }, 1);
  }

  render() {
    return (
      <div className="aae__container">
        <Header
          logoImage={Constants.headerData.logoImage}
          title={Constants.headerData.title}
          mainSplashImage={Constants.headerData.mainSplashImage}
          navigateFunction={this.handleScrollToElement.bind(this)}/>
        <Section
          sectionNum='first'
          image={Constants.sectionData[0].image}
          title={Constants.sectionData[0].title}
          description={Constants.sectionData[0].description}/>
        <Section
          sectionNum='second'
          image={Constants.sectionData[1].image}
          title={Constants.sectionData[1].title}
          description={Constants.sectionData[1].description}/>
        <Section
          sectionNum='third'
          image={Constants.sectionData[2].image}
          title={Constants.sectionData[2].title}
          description={Constants.sectionData[2].description}/>
        <Footer
          ref='footer'
          title={Constants.footerData.title}
          notice={Constants.footerData.notice}/>
      </div>
    );
  }
}
