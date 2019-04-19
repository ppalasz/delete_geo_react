import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import '../css/bottom_menu.css';

class BottomMenu extends Component {

  url = "https://geoforum.pl/api/?table=bottom_menu"

  constructor(props) {
    super(props);

    this.state = {     
      error: "",
      isLoaded : false,
      isLoading: false,
      fetchedData: []
    };
  }


  componentDidMount() {
    this.setState({ isLoaded: false, isLoading:true });

    fetch(this.url)
      .then(response => response.json())
      .then(data => this.setState({ fetchedData: data, isLoaded: true, isLoading:false }))
      .catch(error => this.setState({ error, isLoaded: false, isLoading:false }));
  }
  

  render() {

    if (!this.state.fetchedData) {
      return <p>No data yet ...</p>;
    }

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    if (this.state.isLoading) {
      return <p>Loading top menu...</p>;
    }

    var data = this.state.fetchedData

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="bottom-menu">      
      <BrowserRouter>
        {data.map(item =>
          <Navbar.Brand key={item.id_menu} >
           <Link to={item.link} activeClassName="active">{item.name}</Link>
          </Navbar.Brand>         
        )}
        </BrowserRouter>
       
        
      </Navbar>
    )

   
  }
}

export default BottomMenu;
