var React = require('react');
var ReactDOM = require('react-dom');

var List = require("./list");
var Card = require("./card")
var ListContainer = require("./listContainer")

var Board = React.createClass({
    getInitialState: function() {
        return {
            lists: [
                {
                    title:'Processors', 
                    cards: ['i3', 'i5', 'i7','test']
                    
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
                <ListContainer
                    title = {this.props.title} 
                    cards={this.props.cards} 
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
                <ListContainer />
            </div> 
            );
    }
    
    // onAddInputChanged: function(event) {
    //     console.log('ithappened')
    // },
    
    // onAddSubmit: function(event) {
    //     event.preventDefault();
    //     console.log('hallo')
    // }
});


    
module.exports = Board;


