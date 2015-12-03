# Data Flow

![Data Flow](https://facebook.github.io/react/img/blog/tutsplus.png)

## Demo

    'use strict';
    var React = require('react');
    var ReactDOM = require('react-dom');

    var Image = React.createClass({
        render : function(){
            return <img alt="Brand" src={this.props.src}/>
        }
    });

    var Navbar = React.createClass({
        render : function(){
            return (
                <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <Image
                                src="http://jstudio.idv.tw/downloads/imgs/1805898618.jpg" />;
                        </a>
                    </div>
                </div>
                </nav>
            );
        }
    });

    ReactDOM.render(
        <Navbar />,
        document.getElementById('container'));
