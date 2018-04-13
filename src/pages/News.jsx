import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './News.css';

class News extends Component {
    render() {
      return (
        <div>
            <Image src='assets/mountain-man.jpg' className='header-image'/>
            <Grid>
                <h2>News</h2>
                <Row>
                    <Col xs={12} sm={8} className='main-section'>
                        <p>Just pretend you are a whisper floating across a mountain. We can fix anything. Maybe there's a happy little Evergreen that lives here. That's what makes life fun. That you can make these decisions. That you can create the world that you want. You can create the world you want to see and be a part of. You have that power. This is your creation - and it's just as unique and special as you are.</p>
                        <p>Let's do it again then, what the heck. Remember how free clouds are. They just lay around in the sky all day long. Steve wants reflections, so let's give him reflections. There's nothing wrong with having a tree as a friend. What the devil. Don't fiddle with it all day.</p>
                        <p>You need the dark in order to show the light. We wash our brush with odorless thinner. I like to beat the brush. Be so very light. Be a gentle whisper. Let's have a little bit of fun today.</p>
                        <p>I get carried away with this brush cleaning. Just make a decision and let it go. It's almost like something out of a fairytale book. You want your tree to have some character. Make it special.</p>
                    </Col>
                    <Col xs={12} sm={4} className='sidebar-section'>
                        <Image src='assets/person-legs.jpg'/>
                        <p>Let's get wild today. It's a very cold picture, I may have to go get my coat. It’s about to freeze me to death. Be careful. You can always add more - but you can't take it away. Let's make a nice big leafy tree.</p>
                    </Col>
                </Row>

            </Grid>
        </div>
      );
    }
}

export default News;