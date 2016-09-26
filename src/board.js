var React = require('react');
var ReactDOM = require('react-dom');

var List = require("./list");
var Card = require("./card")
var Board = React.createClass({
    render: function(props) {
        var lists = []
        for (var i=0; i<3; i++) {
            lists.push(<List />);
        }
        var listNames = ['1st', '2nd', '3rd']
        return (
            <div className="board">
                <div className ='boardName'>
                    {this.props.title}
                </div>
                <div className = 'list'>
                    {this.props.lists}
                    <List title = {listNames[0]}/>
                    <Card text = {"cardText"}/>
                </div>
                <div className = 'list'>
                    {this.props.lists}
                   <List title = {listNames[1]} />
                   <Card text = {"cardText"}/>
                </div>
                <div className = 'list'>
                    {this.props.lists}
                    <List title = {listNames[2]} />
                    <Card text = {"cardText"}/>
                </div>
            </div>    
            );
    }
});

var BoardList = function() {
    return (
        <div className ='board-list'>
            <Board title = 'Board 1'/>
        </div>
        );     
};
    
module.exports = BoardList;
