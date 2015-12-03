# State and Props

1. 每一個Component 中都會有 this.state and this.props

2. state 是這個物件的狀態描述

3. props 是上層 Componet 傳遞下來的資料

4. props 可以是字串，數字也可以是function

5. state 可以利用setState 來修改值

6. Props 不建議修改，如果真的需要修改請從 Top Level 修改

## Demo

    'use strict';
    var React = require('react');
    var ReactDOM = require('react-dom');

    var ParentComponent = React.createClass({
        getInitialState : function(){
            return {
                name : 'Tomas'
            };
        },
        changename : function(name){
            this.setState({name : name});
        },
        render : function(){
            return (
                <div>
                    <p>我們有一個孩子叫做</p>
                    <Child
                        changename={this.changename}
                        name = {this.state.name}/>
                </div>
            )
        }
    });

    var Child = React.createClass({
        changename : function(){
            this.props.changename(this.refs.newname.value);
        },
        render : function(){
            return (
                <div>
                    <p>{this.props.name}</p>
                    <input ref='newname' type="text" placeholder='要改的名字打這邊'/>
                    <button
                        onClick={this.changename}>改名字</button>
                </div>
            );
        }
    });
    ReactDOM.render(
        <ParentComponent />,
        document.getElementById('container'));

