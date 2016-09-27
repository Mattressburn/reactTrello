var React = require('react');
var ReactDOM = require('react-dom');

var Card = require("./card");


var List = React.createClass({
   getInitialState: function() {
       return {
           text: "",
           cards: []
       };
   },
   
   render: function() {
       return (
           <section className="list">
                <h2>{this.props.title}</h2>
                <div className ="cards">
                    {this.props.cards.map(function(card,index) { 
                        return <Card key={index} text={card} />; 
                    })}
                </div>
                <form> 
                    <input 
                        type = "text"
                        id = "textInput"
                        placeholder = "Enter card text"
                        ref='cardref'
                        onChange={this.onAddInputChanged}>
                    </input>
                    <input 
                        type="submit"
                        onClick = {this.onAddSubmit}>
                    </input>
                </form>
            </section>
           )
   },
   
   onAddInputChanged: function(event) {
        console.log(document.getElementById("textInput").value);
        this.state.text = document.getElementById("textInput").value;
        console.log(this.state.text)
    },
    
    onAddSubmit: function(event) {
        event.preventDefault();
       this.props.onAddCard(this.refs.cardref.value);
       this.refs.cardref.value ="";
    }
});



//

module.exports = List;

// React.createClass({
//     render: function(props) {
//         var cards = [];
//          console.log(this.state.lists)    
//         for (var i=0; i<props.cards.length ; i++) {
//             cards.push(<Card text={props.cards[i]} key={i} />)
//         }
   
//     return (
//         <div className="card-list">
//             <h2>{this.props.title}</h2>
//             <p>{cards}</p>
//         </div>
//         );
//     }
// });