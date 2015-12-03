# Virtual DOM

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React Demo</title>
</head>
<body>
    <div id="container" class='container'></div>
</body>
<script src='bundle.js'></script>
</html>
```

app.jsx

```js
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
```

**秘密都隱藏在 bundle.js裡**

