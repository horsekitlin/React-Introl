# First Component Demo

    'use strict';
    var React = require('react');
    var ReactDOM = require('react-dom');

    var OtherSAY = React.createClass({
        render : function(){
            return (
                <div className="media">
                    <div className="media-left">
                        <a href="#">
                            <img style={{width:'100px'}} className="media-object" src="http://etech.gac.ntnu.edu.tw/responsiva/cs/images/art_Sun_Flower.jpg" alt="logo"/>
                        </a>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">這裡是別人要說的話</h4>
                        <span className='help-block'>2011-11-11 AM 00:00:00</span>
                    </div>
                </div>
            );
        }
    });

    var ISAY = React.createClass({
        render : function(){
            return (
                <div className="media">
                    <div className="media-left pull-right">
                        <a href="#">
                            <img style={{width:'100px'}} className="media-object" src="http://etech.gac.ntnu.edu.tw/responsiva/cs/images/art_Sun_Flower.jpg" alt="logo"/>
                        </a>
                    </div>
                    <div className="media-body">
                        <div className="pull-right">
                            <h4 className="media-heading">這裡是我要說的話</h4>
                            <span className='help-block'>2011-11-11 AM 00:00:00</span>
                        </div>
                    </div>
                </div>
            );
        }
    });

    ReactDOM.render(
        <OtherSAY />,
        document.getElementById('container'));

