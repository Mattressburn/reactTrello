var React = require('react');

var Card = function(props) {
    var text = props.text;
    
    return(
        <div>{text}</div> //could this be <p> instead of <div>?
    );
};

module.exports = Card;