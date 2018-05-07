import React, { Component } from 'react';
import { Button, FormControl, FormGroup, Row, Col, Jumbotron} from 'react-bootstrap';
import axios from 'axios';
import './Select.css';
import mantequilla from './../../assets/mantequilla.png';
import granola from './../../assets/granola.png';
import nibs from './../../assets/nibs.png';

class Select extends Component {
    state = {
        showcases: []
    }
    componentDidMount() {
        // axios.get('http://localhost:3000/api/showcases/constants/')
        // .then(res => {
        //     const showcases = res.data.showcases;
        //     console.log(showcases);
        //     this.setState({ showcases });
        //     var counter = 0;
        //     var listItems = this.state.showcases.map(function(item) {
        //         return (
        //             <option value="{item.value}}" key={counter++}>{item.display}</option>
        //         );
        //       });
        //     const showcasesItems = listItems;
        //     this.setState({ showcasesItems });
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }

    handleClick (){
        console.log('click', this.state);
        this.props.history.push('/setup');
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Los mejores y mas ricos productos organicos!</h1>
                    <p>
                        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh
                    </p>
                </Jumbotron>
                <Row>
                    <Col md={4} sm={12}>
                        <div className="card">
                            <Col md={12}>
                                <img class="img-circle" src={mantequilla} alt="Generic placeholder image" width="140" height="140"/>
                                <h2>Mantequilla de Mani</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                                <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                            </Col>
                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="card">
                            <Col md={12}>
                                <img class="img-circle" src={granola} alt="Generic placeholder image" width="140" height="140"/>
                                <h2>Granola</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                                <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                            </Col>
                        </div>
                        
                    </Col>
                    <Col md={4} sm={12}>
                        <div className="card">
                            <Col md={12}>
                                <img class="img-circle" src={nibs} alt="Generic placeholder image" width="140" height="140"/>
                                <h2>Nibs de Cacao</h2>
                                <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                                <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                            </Col>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Select;
