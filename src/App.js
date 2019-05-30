import React, { Component } from 'react';
import axios from 'axios';
import './App.css';



class App extends Component {
 constructor(){
   super();
   this.state ={
     items: [],
     cityInput:'',
     foodInput: '',
   }
 }

 componentDidMount(){
  
 }
 handleChange = (event) => {
   this.setState({
     userInput: event.target.value,
   })
 }


  handleClick =(e) => {
    e.preventDefault();
    axios({
      url: 'https://developers.zomato.com/api/v2.1/cities',
      method: 'GET',
      dataResponse: 'JSON',
      headers: {
        "accept": "application/json",
        "x-requested-with": "xmlhttprequest",
        "user-key": "0968faa2918c801deb6840af027c61de"
      },
      params: {
        q: this.state.cityInput
      }
    }).then(function (result) {
      console.log(result)
    })
  } 

  render() {
    return (
      <div className="App">
        <form action="submit">
          <input onChange={this.handleChange} value={this.state.cityInput} name="cityInput" type="text"/>
          <input onChange={this.handleChange} value={this.state.foodInput} name="foodInput" type="text" />
          <button onClick={this.handleClick}>Submit</button>

        </form>


      </div>

    );

  }

}



export default App;