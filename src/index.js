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
  async create () {
    const response = await axios.post('/api/flights');
    const flight = response.data;
    const flights = [...this.state.flights, flight];
    this.setState({flights})
  } 
  async destroy() {} 

    render() {
      return (
        <div id='main'>

          <h1> Fullstack International Airport </h1>

          <div>
            {this.state.flights.map(flight => {
              return ( 
                <div key={flight.id}>
                <div > Flight# {flight.flightNumber} 
                  <button onClick={() => this.destroy(flight)}> Remove </button>
                </div>
                </div>
              )
            })}
          </div>

          <button onClick={() => this.create}> Add New Flight </button>
            
        </div>
      )
    }
}


ReactDOM.render(
    <Main />,
    document.getElementById('root') // initially wasnt working because I had '#' in front of root!
  )

