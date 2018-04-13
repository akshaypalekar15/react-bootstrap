import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col,Image} from 'react-bootstrap';
import './About.css';

class About extends Component {
    render() {
      return (
        <div>
            <Image src='assets/person-legs.jpg' className='header-image'  />
            <Grid>
                <Col xs={12} sm={8} smOffset={2}>
                    <Image src='assets/person-2.jpg' className='about-profile-pic' rounded />
                    <h3>Frank The Cyborg</h3>
                    <p>Just a happy little shadow that lives in there. Mix your color marbly don't mix it dead. Clouds are free they come and go as they please.</p>
                    <p>Any little thing can be your friend if you let it be. We'll put all the little clouds in and let them dance around and have fun. Learn when to stop. Anytime you learn something your time and energy are not wasted.</p>
                    <p>The only thing worse than yellow snow is green snow. We don't really know where this goes - and I'm not sure we really care. You can get away with a lot. Just make little strokes like that.</p>
                    <p>Get tough with it, get strong. We don't make mistakes we just have happy little accidents. We might as well make some Almighty mountains today as well, what the heck. Just make a decision and let it go. Just take out whatever you don't want. It'll change your entire perspective. We'll make some happy little bushes here.</p>
                </Col>
            </Grid>
        </div>
      );
    }
}

export default About;