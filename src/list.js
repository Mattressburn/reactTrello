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
                        return <div key={index}>{card}</div> 
                    })}
                </div>
                <form> 
                    <input 
                        type = "text"
                        id = "textInput"
                        onChange={this.props.onAddInputChanged}>
                    </input>
                    <input 
                        type="submit"
                        onClick = {this.props.onAddSubmit}>
                    </input>
                </form>
            </section>
           )
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