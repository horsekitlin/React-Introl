'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var Dog = React.createClass({
    componentWillMount : function(){
        alert('招喚神犬!');
    },
    componentDidMount : function(){
        alert('componentDidMount');
        $('#dog').animate({width : '500px'}, 'slow');
        $('#dog').animate({height : '500px'}, 'slow');
        $('#dog').animate({weight : '200px'}, 'slow');
        $('#dog').animate({height : '200px'}, 'slow');
    },
    componentWillUnmount : function(){
        alert('汪！汪！');
    },
    render : function(){
        return <img id='dog' src='http://www.daliulian.net/imgs/image/19/1976926.jpg' />
    }
});

var Cat = React.createClass({
    componentWillMount : function(){
        alert('招喚神喵!');
    },
    componentDidMount : function(){
        alert('奴才自己滾來見我！');
    },
    componentWillUnmount : function(){
        alert('睡！');
    },
    render : function(){
        return <img src='https://upload.wikimedia.org/wikipedia/commons/a/a2/Cat_Golden_Chinchilla.jpg' />
    }
});
var Main = React.createClass({
    getInitialState : function(){
        return {
            type : ''
        };
    },
    calldog : function(){
        this.setState({type : 'dog'});
    },
    callcat : function(){
        this.setState({type : 'cat'});
    },
    clear : function(){
        this.setState({type : ''});
    },
    render : function(){
        var display;
        var type = this.state.type;

        if(type === ''){
            display = <h3>您尚未招喚寵物</h3>;
        }else if(type === 'dog'){
            display = <Dog />;
        }else if(type === 'cat'){
            display = <Cat />;
        }
        return (
            <div>
                <button
                    onClick={this.calldog}>招喚神犬</button>
                <button
                    onClick={this.callcat}>招喚神喵</button>
                <button
                    onClick={this.clear}>回收</button>
                <div>
                    {display}
                </div>
            </div>
        )
    }
});
ReactDOM.render(
    <Main />,
    document.getElementById('container'));
