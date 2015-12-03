'use strict';
var React = require('react');

module.exports = React.createClass({
    getInitialState : function(){
        return {
            content : ''
        };
    },
    addmessage : function(e){
        var content = this.refs.content.value;
        //清空textarea
        this.setState({content : ''});
        //修改上層的messages陣列
        this.props.addmessage(content);
    },
    change : function(e){
        var msg = e.target.value;
        this.setState({content : msg});
    },
    render : function(){
        return (
            <div>
                <textarea
                    onChange={this.change}
                    ref='content'
                    rows="3"
                    className="form-control"
                    value={this.state.content}></textarea>
                <button
                    onClick={this.addmessage}
                    className='btn btn-sm btn-primary'>送出</button>
            </div>
        )
    }
});

