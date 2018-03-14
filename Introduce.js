import React, { Component } from 'react';
import './App.css';
import './index.css';
import './bootstrap.css';
class Introduce extends Component{
  render(){
    return(
            <div>
                  <div className="sidebar">
                    <h4>作者介绍</h4>
                    <p></p>
                    <div className="author_img">
                    <img className="img-responsive" src="/toux.jpg" alt="">
                    </img>
                    </div>
                    <p><span className="glyphicon glyphicon-flag"></span>毕业学校:华东理工大学</p>
                    <p><span className="glyphicon glyphicon-cog"></span>专业:通信工程</p>
                    <p><span className="glyphicon glyphicon-heart"></span>爱好:篮球，码代码</p>
                    <p><span className="glyphicon glyphicon-tag"></span>级别:编程小白</p>
                    <p><span className="glyphicon glyphicon-envelope"></span>交流邮箱:1144135852@qq.com</p>
                  </div>
                  <p></p>
                  <div className="sidebar">
                    <div className="panel panel-default"> 
                                            <div className="panel-heading">
                                                <h3 className="panel-title">前端知识</h3>
                                            </div>
                                            <div className="panel-body">
                                                <p>HTML/CSS/JS</p>
                                                <p>Jquery JqueryUI</p>
                                                <p>Ajax XML</p>
                                                <p>bootstrap</p>  
                                            </div>
                                            <p></p>
                                            <div className="panel-footer">
                                                <p>AngularJS框架</p>
                                                <p>Node.js</p>
                                                <p>Vue</p>
                                                <p>React</p>
                                            </div>

                    </div>
                  </div>
                  <p></p>
                  <div className="sidebar">
                    <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h3 className="panel-title">后台知识</h3>
                                            </div>
                                            <div className="panel-body">
                                                <p>php</p>
                                                <p>python</p>
                                                <p>MySQL</p>
                                                <p>PostgreSQL</p>  
                                            </div>
                                            <p></p>
                                            <div className="panel-footer">
                                                <p>python-flask框架</p>
                                   
                                                <p>python-Django框架</p>
                                                <p>SQLAlchemy</p>
                                            </div>
                    </div>
                  </div>
                  <p></p>
            </div>
      );

  }
}
export default Introduce;