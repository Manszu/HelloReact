var GreeterMessage = React.createClass(
    {}
)

var Greeter = React.createClass({ /*component*/
    getDefaultProps: function(){ /*method built in to react*/
        return{
            name: 'React',
            message: 'This is a default message!!'
        };
    },
    getInitialState: function(){
        return{
            name: this.props.name /*name stsdaate that you can change by yourself*/

        }
    },
    onButtonClick: function(e){
      e.preventDefault(); /*prevent full browser reload*/

      var nameRef= this.refs.name;

      var name = nameRef.value;
      nameRef.value=''; /*by adding a '' after = input string is every every time when the page is reloaded*/
        if (typeof name === 'string' && name.length>0){
            this.setState({
                name: name
            });
        }
     /*alert(name);*/

    },

    render: function(){
        var name = this.state.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Hello {name}!</h1>
                <p>{message + '!!'}</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button> Set Name</button>
                </form>
            </div>
        );
    }
});

var firstName="Krzysiek";

ReactDOM.render(
    <Greeter name={firstName} message="Message from prop!"/>,
    document.getElementById('app')
);

