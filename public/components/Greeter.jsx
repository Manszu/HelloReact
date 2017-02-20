var React= require('react');
var GreeterMessage= require('./GreeterMessage');
var GreeterForm= require('./GreeterForm');

var Greeter = React.createClass({ /*component object*/
    getDefaultProps: function(){ /*method built in to react*/
        return{
            name: 'React',
            message: 'This is a default message!!'
        };
    },
    getInitialState: function(){
        return{
            name: this.props.name, /*name stsdaate that you can change by yourself*/
            message: this.props.message
        };
    },
    handleNewData: function(updates) {  /*this function sets a state*/
        this.setState(updates);
        /*alert(name);*/
    },

    render: function(){
        var name = this.state.name;
        var message = this.state.message;
        /*rerender because it relies on the name state and message state*/
        return(
            <div>
            <GreeterMessage name={name} message={message}/>
            <GreeterForm onNewData={this.handleNewData}/>
        </div>
        );
    }
});

module.exports= Greeter;