'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
    render : function(){
        return (
            <p>Hello world!</p>
        );
    }
});
ReactDOM.render(
    <Hello />,
      document.getElementById('container'));
