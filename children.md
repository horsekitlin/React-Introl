# Dynamic Tag

如果只是使用props來傳遞我們的變數

在使用上會有許多的不便利

如何更彈性的建立一個Component

就要看我們的 **Children** 了

## Children會幫你傳遞整組的 Tag

Demo

Table.jsx

```js
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
```

app.jsx

```js
'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var TableTemplate = require('./Table.jsx');

var Main = React.createClass({
    render : function(){
        return(
            <div>
                <TableTemplate>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Simon</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>John</td>
                            <td>26</td>
                        </tr>
                    </tbody>
                </TableTemplate>
            </div>
        );
    }
});

ReactDOM.render(
    <Main />,
    document.getElementById('container'));
```
