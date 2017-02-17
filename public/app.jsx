var GreeterMessage = React.createClass({  /*static component*/
    render: function() {
        var name= this.props.name;
        var message= this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function (e){
        e.preventDefault();

        var updates = {}; //object updates
        var name= this.refs.name.value;
        var message= this.refs.message.value;

        if(name.length> 0){
            this.refs.name.value='';
            updates.name=name;
        }

        if(message.length> 0){
            this.refs.message.value='';
            updates.message= message;
        }

        this.props.onNewData(updates);
    },
    render: function(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Enter name"/>
                </div>
                <div>
                    <textarea ref="message" placeholder="Enter message"></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
});

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

var firstName="Krzysiek";

ReactDOM.render(
    <Greeter name={firstName} />,
    document.getElementById('app')
);
