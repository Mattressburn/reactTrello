var React = require('react');
var List = require('./list');
var Card = require("./card");

var ListContainer = React.createClass({
   getInitialState: function() {
       return {
           text: "",
           cards: this.props.cards,
       };
   },
   render: function() {
       return (
           <List
           title={this.props.title}
           cards={this.state.cards}
           onAddCard={this.onAddCard}
           />
        )
   },
   onAddCard: function(cardText) {
       this.setState({
           cards: this.state.cards.concat(cardText)
       })
   }
});

module.exports = ListContainer;
