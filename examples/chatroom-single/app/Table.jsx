'use strict';
var React = require('react');

var TableTemplate = React.createClass({
    render : function(){
        return(
            <table className="table table-striped table-bordered table-hover">
                {this.props.children}
            </table>
        );
    }
});

module.exports = TableTemplate;
