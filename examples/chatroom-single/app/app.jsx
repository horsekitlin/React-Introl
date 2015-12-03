'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var OtherSay = require('./OtherSay.jsx');
var InputBlock = require('./InputBlock.jsx');
var moment = require('moment');
var ISAY = require('./ISay.jsx');

var config = {
    name : 'TomasLin',
    logo : 'http://etech.gac.ntnu.edu.tw/responsiva/cs/images/art_Sun_Flower.jpg'
};

var Main = React.createClass({
    getInitialState : function(){
        return {
            messages : []
        };
    },
    addmessage : function(content){
        var messages = this.state.messages;
        console.log(content);
        messages.push({
            name : config.name,
            content : content,
            logo : config.logo,
            created_time : moment().format('YYYY-MM-DD A hh:mm:ss')
        });
        this.setState({messages : messages});
    },
    render : function(){
        return (
            <div className='panel panel-default'>
                <div className='panel-heading'>聊天室</div>
                <div className='panel-body'>
                    {this.state.messages.map(function(message){
                        return (<ISAY
                                    message={message}/>);
                    })}
                </div>
                <div className='panel-footer'>
                    <InputBlock
                        addmessage={this.addmessage}/>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <Main />,
      document.getElementById('container'));

