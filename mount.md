# 控制你的Component 常用的 Method

## 最近很夯的 SPA(single page application)

Mount 的動作是表示從 virtual DOM 掛載到真實的DOM這個行為

如同將要展示的產品放置到展示櫥窗的動作

## 常用的API

1. componentDidMount

    元件被render後執行的動作

2. componentWillMount

    在元件render 前要先做的準備工作

3. componentWillUnmount

    在元件要被移除之前要做的動作

## Demo

    'use strict';
    var React = require('react');
    var ReactDOM = require('react-dom');

    var Dog = React.createClass({
        componentWillMount : function(){
            alert('招喚神犬!');
        },
        componentDidMount : function(){

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