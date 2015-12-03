'use strict';
var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
    render : function(){
        var message = this.props.message;

        return (
            <div className="media">
                <div className="media-left">
                    <a href="#">
                        <img style={{width:'100px'}} className="media-object" src={message.logo} alt="logo"/>
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{message.message}</h4>
                    <span className='help-block'>{moment(message.created_time * 1000).format('YYYY-MM-DD A hh:mm:ss')}</span>
                </div>
            </div>
        );
    }
});

