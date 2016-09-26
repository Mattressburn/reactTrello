var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    render: function(props) {
       return (
        <div className="card">
            {this.props.text}
        </div>   
        )
    }
})

module.exports = Card;