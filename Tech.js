import React, { Component } from 'react';
import './App.css';
import './index.css';
import './bootstrap.css';
class Tech extends Component{
	render(){
		return(
		 	<div className="post">
								<div className="post-head">
									<h1>标题</h1>
									<p>阅读次数0</p>
								</div>
								<div className="post-image"></div>
								<div className="post-content">简介</div>
								<div className="post-link">
									<a href="#" className="btn btn-success">阅读全文</a>
								</div>				
			</div>
			
			);

	}


}
  export default Tech;