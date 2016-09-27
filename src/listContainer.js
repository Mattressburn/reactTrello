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
   
   renderLists: function() {
        var lists = [];
        console.log(this.state)
        for (var i=0; i<this.state.lists.length; i++) {
            lists.push(
                <List
                    title = {this.state.lists[i].title} 
                    cards={this.state.lists[i].cards} 
                    key={i}
                    onAddInputChanged = {this.onAddInputChanged}
                    onAddSubmit = {this.onAddSubmit}
                />
            );
        }
            return lists;
    },
   
   
   render: function() {
       //console.log(this.state.lists)
       return (
           <div>
                {this.renderLists()}
            </div>
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
