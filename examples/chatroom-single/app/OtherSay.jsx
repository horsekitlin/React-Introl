'use strict';
var React = require('react');

module.exports = React.createClass({
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

