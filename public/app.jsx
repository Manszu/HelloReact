var React = require('react');
var ReactDOM= require('react-dom');
var Greeter = require('Greeter');



var firstName="Krzysiek";
//initialize code for our application
ReactDOM.render(
    <Greeter name={firstName} />,
    document.getElementById('app')
);
