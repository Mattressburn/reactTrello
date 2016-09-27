var React = require('react');
var List = require('./list');
var Card = require("./card");

var ListContainer = React.createClass({
   getInitialState: function() {
       return {
           text: "",
           cards: []
       };
   },
   render: function() {
       return (
        <List
            cards = {this.state.cards}
            onAddInputChanged = {this.onAddInputChanged}
            onAddSubmit = {this.onAddSubmit}
        />
        )
   },
   
   onAddInputChanged: function(event) {
        console.log(document.getElementById("textInput").value);
        this.state.text = document.getElementById("textInput").value;
        console.log(this.state.text)
    },
    
    onAddSubmit: function(event) {
        event.preventDefault();
        this.state.cards.push(this.state.text);
       document.getElementById("textInput").value = ""
       this.render()
       console.log(this.state.cards)
    }
});

module.exports = ListContainer;
