import React, { Component } from 'react';
import './App.css';
import './index.css';
import './bootstrap.css';
class Main extends Component{
	render(){
		return(
				<div className="post">
								<div className="post-head">
									<h1>标题</h1>
									<i></i>
									<p>点赞次数0</p>
								</div>
								<div className="post-image"></div>
								<i></i>
								<div className="post-content">内容</div>
								<i></i>
								<div className="post-link">
									<a className="btn btn-success">点赞</a>
								</div>
								<i></i>				
				</div>
			);

	}


}
  export default Main;