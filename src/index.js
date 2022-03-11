// import React, axios, and other stateless components here
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


// Main Component w/ render function

class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      flights: []
    };
    this.create = this.create.bind(this);
    //this.destroy = this.destroy.bind(this);
  }

  async componentDidMount() {
    
      const response = await axios.get('/api/flights');
      const flights = response.data
      this.setState({flights: flights});
   
  }

 // Create new Flight
  async create () {
    
    const response = await axios.post('/api/flights');
    const newflight = response.data;
    const flights = [...this.state.flights, newflight];
    this.setState({ flights });
  } 

 // Remove flight

  async destroy(flight) {
    console.log(flight)
    await axios.delete(`/api/flights/${flight.id}`);
    const flights = this.state.flights.filter(_flight => _flight.id !== flight.id);
    this.setState({ flights })
  } 

    render() {
      return (
        <div id='main'>

          <h1> Fullstack International Airport </h1>
          <button onClick={ this.create } > Add New Flight </button>
          <div>
            {this.state.flights.map(flight => {
              return ( 
                <div key={flight.id}>
                <div> Flight# {flight.flightNumber} 
                  <button onClick={ () => this.destroy(flight) }> Remove </button>
                </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
}




ReactDOM.render(
    <Main />,
    document.getElementById('root') // initially wasnt working because I had '#' in front of root!
  )

