import React, { Component } from 'react';
import './App.css';
import './index.css';
import './bootstrap.css';
class Life extends Component{
	render(){
		return(
				<div className="post">
					<video width="320" height="240" controls>
   						 <source src="movie.mp4" type="video/mp4"></source>
					</video>
					<p> have fun</p>			
				</div>
			);

	}


}
  export default Life;