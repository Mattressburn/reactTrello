var React = require('react');
var ReactDOM = require('react-dom');

var BoardList = require("./board");

var Person = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        var classes = 'person ' + (this.state.highlight ? 'highlight': '')
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="person-name">{this.props.name}</div>
                <img className="person-img" src={this.props.imageUrl} />
                <div className="person-job">{this.props.job}</div>
            </div>
        );
    }
});

Person.defaultProps = {
    imagueUrl: "http://www.gravatar.com/avatar/?d=identicon"
};

var PersonList = React.createClass({
    render: function() {
    var people = [];
    for (var i=0; i<5; i++) {
        people.push(<Person />);
    }
    return (
        <div className="person-list">
            <Person name = "Derek Zoolander"
                    imageUrl = "http://uifaces.com/assets/static/images/zoolander.jpg"
                    job="Male model" />
             <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />       
        </div>
        );
    }    
});



// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<Board />, document.getElementById('app'));
// });
var listNames = ['name1','name2','name3']
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<BoardList />, document.getElementById('app'));
});