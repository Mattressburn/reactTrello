var React = require('react');
var ReactDOM = require('react-dom');

var Card = require("./card");


var List = React.createClass({
    render: function() {
        var cards = [];
        for (var i=0; i<3 ; i++) {
            cards.push(<Card />)
        }
    return (
        <div className="card-list">
            <div className ='card-title'>
                {this.props.title}
            </div>
            <div className = 'cards'>
                {this.props.cards}
            </div>
        </div>
        );
    }
});

module.exports = List;