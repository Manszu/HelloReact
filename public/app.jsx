var React = require('react');
var ReactDOM= require('react-dom');
var Greeter = require('Greeter');



var firstName="Jen";
//initialize code for our application
ReactDOM.render(
    <Greeter name={firstName} />,
    document.getElementById('app')
);
