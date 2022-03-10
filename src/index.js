// import React, axios, and other stateless components here
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//functional component (child)

const FlightList = (props) => {
  const flight = props.flight;
  const destroy = props.destroy; // check this
  
}

// Main Component w/ render function

class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      flights: []
    }
    this.create = this.create.bind(this);
    this.destroy = this.destroy.bind(this);
  }
  async componentDidMount() {
    try{
      const response = await axios.get('/api/flights');
      const flights = response.data
      this.setState({flights: flights});
    }
    catch(error){
      console.log(error)
    }
  }

  // re-add these!!!!! 
  async create () {} 
  async destroy() {} 

    render(){
      return (
        <div id='flight'>
          <h1> Fullstack International Airport </h1>
          <ul>
            {this.state.flights.map(flight => {
              return ( 
                <div> <li> {flight.flightNumber} </li></div>
              )
            })}
          </ul>

        </div>
      )
    }
}


ReactDOM.render(
    <Main />,
    document.getElementById('#root')
  )

