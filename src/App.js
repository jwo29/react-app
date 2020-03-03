import React from 'react';

// import React, { useState, useEffect } from "react";

import Header from './pages/Header';
import Content from './pages/Content';

import RandomNumber from './RandomNumber';

// function App() {
class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      value: Math.round(Math.random()*100)
    };

    this.updateValue = this.updateValue.bind(this);

  }

  updateValue(randomValue){
    this.setState({
      value: randomValue
    })
  }

  render() {
    return (
      <div className="App">
        <Header title={this.props.headerTitle}/>
        <Content title={this.props.contentTitle}
          body={this.props.contentBody}/>
        <RandomNumber number={this.state.value}
          onUpdate={this.updateValue} name="Click me!"/>
      </div>
    );
  }
}

// props 값을 임의로 지정해주지 않았을 때 사용할 기본값 설정
// 컴포넌트 클래스 하단에 className.defaultProps = { propsName: value }

App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody'
};

export default App;
