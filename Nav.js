import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Introduce from './Introduce';
import Main from './Main';
import Tech from './Tech';
import Life from './Life';
import './App.css';
import './index.css';
import './bootstrap.css';
class Nav extends Component{
  handleClick1(){
      ReactDOM.render(<Main />, document.getElementById('main'));

  }
  handleClick2(){
      ReactDOM.render(<Tech />, document.getElementById('main'));
  }
  handleClick3(){
      ReactDOM.render(<Life />, document.getElementById('main'));
  }
  render(){
      return(
        <div className="navigation">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <ul className="nav nav-tabs">
                  <li className="active"><a data-toggle="tab" onClick={this.handleClick1}><span className="glyphicon glyphicon-home"></span>首页</a></li>
                  
                  <li><a data-toggle="tab" onClick={this.handleClick2}><span className="glyphicon glyphicon-book"></span>技术</a></li>
                
                  <li><a data-toggle="tab" onClick={this.handleClick3}><span className="glyphicon glyphicon-star"></span>生活</a></li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>

        );

  }
}
  export default Nav;

