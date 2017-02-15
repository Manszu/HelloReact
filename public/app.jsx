var Greeter = React.createClass({ /*component*/
    getDefaultProps: function(){
        return{
            name: 'React',
            message: 'This is a default message!!'
        };
    },
    render: function(){
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Hello {name}!</h1>
                <p>{message + '!!'}</p>

                <form>
                    <input/>
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

