var React = require('react');
var ReactDOM = require('react-dom');

var List = require("./list");
var Card = require("./card")
var ListContainer = require("./listContainer")

var Board = React.createClass({
    getInitialState: function() {
       return {
           text: "",
           cards: this.props.cards,
           lists: [
                {
                    title:'Processors', 
                    cards: ['i3', 'i5', 'i7']
                    
                },
                {
                    title:'Video Cards', 
                    cards: ['GTX1070', 'GTX1080']
                }
            ],
            rendered : ''            
       };
   },
    renderLists: function() {
        var lists = [];
        console.log(this.state)
        for (var i=0; i<this.state.lists.length; i++) {
            lists.push(
                <ListContainer
                    title = {this.state.lists[i].title} 
                    cards={this.state.lists[i].cards} 
                    key={i} 
                />
            );
        }
            return lists;
    },
        
    
    render: function() {
        return (
            <div className="card-board">
                <h1>Board</h1>
               {this.renderLists()}
            </div> 
            );
    }
});


    
module.exports = Board;


