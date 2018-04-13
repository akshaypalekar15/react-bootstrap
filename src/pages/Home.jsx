import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Jumbotron, Col, Button, Image} from 'react-bootstrap';
import './Home.css'

class Home extends Component {
    render() {
      return (
        <Grid>
            <Jumbotron>
                <h2>Welcome to CodeWorld.io</h2>
                <p>Built using react, react-dom and react-bootstrap</p>
                <Link to='/about'>
                    <Button bsStyle='primary'>Learn More</Button>
                </Link>            
            </Jumbotron>
            <Row className='show-grid text-center'>
                <Col xs={12} sm={4} className='person-wrapper'>
                    <Image src='assets/person-1.jpg' circle className='profile-pic'/>
                    <h3>Miya</h3>
                    <p>We'll take a little bit of Van Dyke Brown. In your imagination you can go anywhere you want. Just make little strokes like that. Fluff that up.</p>
                </Col>
                <Col xs={12} sm={4} className='person-wrapper'>
                    <Image src='assets/person-2.jpg' circle className='profile-pic'/>
                    <h3>Frank</h3>
                    <p>Don't fight it, use what happens. But they're very easily killed. Clouds are delicate. In life you need colors. Nice little fluffy clouds laying around in the sky being lazy.</p>
                </Col>
                <Col xs={12} sm={4} className='person-wrapper'>
                    <Image src='assets/person-3.jpg' circle className='profile-pic'/>
                    <h3>Robin</h3>
                    <p>As trees get older they lose their chlorophyll. It's a very cold picture, I may have to go get my coat. It’s about to freeze me to death. In nature, dead trees are just as normal as live trees. Poor old tree.</p>
                </Col>
            </Row>    
        </Grid>  
      );
    }
}

export default Home;