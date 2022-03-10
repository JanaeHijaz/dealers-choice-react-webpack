// import React, axios, and other stateless components here
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

//functional component (child)

const FlightList = (props) => {
  const flight = props.flight;
  const destroy = props.destroy; // check this
  return (
 // finish this
  )
}

// Main Component w/ primary render function

class Main extends React.Component {
  constructor(){
    super()
    this.state = {
      flights: []
    }
  }
  async componentDidMount() {
    try{
      const response = await axios.get('/api/flights');
      this.setState({flights: flights});
    }
    catch(error){
      next(error)
    }
  }

  async create () {} // finish
  async destroy() {} // finish

    render(){
      return (
        <div id='flight'>
          <h1> Fullstack International Airport </h1>
          <ul>
            {this.state.flights.map(flight => {
              return ( 
                <FlightList />
              )
            })}
          </ul>

        </div>
      )
    }
}




//separate other components as needed 

ReactDOM.render(
    <Main />,
    document.getElementById('#root')
  )

