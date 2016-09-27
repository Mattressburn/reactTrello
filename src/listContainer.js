var React = require('react');
var List = require('./list');
var Card = require("./card");

var ListContainer = React.createClass({
   getInitialState: function() {
       return {
           text: "",
           cards: [],
           lists: [
                {
                    title:'Processors', 
                    cards: ['i3', 'i5', 'i7']
                    
                },
                {
                    title:'Video Cards', 
                    cards: ['GTX1070', 'GTX1080']
                }
            ]
       };
   },
   render: function() {
       return (
            <List
                title = {this.state.lists[i].title}
                cards = {this.state.cards}
                onAddInputChanged = {this.onAddInputChanged}
                onAddSubmit = {this.onAddSubmit}
                lists = {this.state.lists}
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
       console.log(this.state.cards)
    }
});

module.exports = ListContainer;
