'use strict';
var React = require('react');

module.exports = React.createClass({
    render : function(){
        var message = this.props.message;

        return (
            <div className="media">
                <div className="media-left pull-right">
                    <a href="#">
                        <img style={{width:'100px'}} className="media-object" src={message.logo} alt="logo"/>
                    </a>
                </div>
                <div className="media-body">
                    <div className="pull-right">
                        <h4 className="media-heading">{message.content}</h4>
                        <span className='help-block'>{message.created_time}</span>
                    </div>
                </div>
            </div>
        );
    }
});

