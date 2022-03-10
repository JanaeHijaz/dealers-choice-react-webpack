// import React, axios, and other stateless components here
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//functional component (child)


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
    try{
      const response = await axios.get('/api/flights');
      const flights = response.data
      this.setState({flights: flights});
    }
    catch(error){
      console.log(error)
    }
  }

 // Create new Flight
  async create () {
    console.log("in the create function but getting 500 error message!")

    const response = await axios.post('/api/flights');
    const newflight = response.data;
    console.log(newflight)
    const flights = [...this.state.flights, newflight];
    this.setState({ flights });
  } 

 // Remove flight

  async destroy(id) {
    await axios.delete(`/api/flights/${id}`);
    const flights = this.state.flights.filter(_flight => _flight.id !== id);
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
                <div > Flight# {flight.flightNumber} 
                  <button onClick={ () => console.log("delete function causing error") }> Remove </button>
                </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
}

// create and destroy functions are not working, create function is returning a 500 error message,
// I believe the issue is with my server, although I don't see any issues with my app.post route. 
// I dont know what to do, sorry. 

ReactDOM.render(
    <Main />,
    document.getElementById('root') // initially wasnt working because I had '#' in front of root!
  )

