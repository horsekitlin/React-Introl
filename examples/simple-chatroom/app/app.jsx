'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var OtherSay = require('./OtherSay.jsx');
var InputBlock = require('./InputBlock.jsx');
var moment = require('moment');
var ISAY = require('./ISay.jsx');

var config = {
    server : 'http://www.itshowtime.idv.tw/chatroom',
    name : 'TomasLin',
    logo : 'http://etech.gac.ntnu.edu.tw/responsiva/cs/images/art_Sun_Flower.jpg'
};

var process;

var Main = React.createClass({
    getInitialState : function(){
        return {
            messages : [],
        };
    },
    componentWillMount : function(){
        var _this = this;
        process = setInterval(function(){
            _this.refresh();
        }, 5000);
    },
    refresh : function(){
        var _this = this;
        request('/rooms/list/v1/', {}).done(function(resp){
            //這是不好的，平常不要這樣搞
            _this.setState({messages : resp.data});
        });
    },
    componentWillUnmount : function(){
        clearInterval(process);
    },
    addmessage : function(message){
        var query = {
            name : config.name,
            message : message,
            logo : config.logo,
        };
        request('/rooms/created/v1/', query)
        .done(function(resp){
            console.log(resp);
        });
    },
    render : function(){
        return (
            <div className='panel panel-default'>
                <div className='panel-heading'>聊天室</div>
                <div className='panel-body'>
                    {this.state.messages.map(function(message, index){
                        if(message.name === config.name){
                            return (<ISAY
                                        key={'message' + index}
                                        message={message}/>);
                        }else{
                            return <OtherSay
                                        key={'message' + index}
                                        message={message}/>
                        }
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

//使用ajax 發送request
function request(route, data){
    var url = config.server + '/' + route;
    return $.ajax({
        url : url,
        method : 'POST',
        dataType : 'json',
        data : data
    });
}
