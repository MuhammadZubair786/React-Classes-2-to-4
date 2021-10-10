import {Component} from "react";
import './App.css'
// import {Button} from 'react-bootstrap'


export  default class App extends Component {

  render() {
  
    return (
      <>
      <h1 style={{color:'red'}} className='h1'>hello</h1>
      {/* <Button variant="primary">Primary</Button>{' '} */}
      <div className="card" style={{width: '18rem'}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
      </>
     
      
    )
  }

}


