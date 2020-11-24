import React, { Component } from 'react'
import Counter from '../components/Cases';
import { Container, Col, Row } from 'react-bootstrap';

export class Home extends Component {
    render() {
        return (
            <div style={{color: 'white'}} className='text-center pt-3'>
            <Container>
                <Row>
                    <Col className="d-flex flex-column justify-content-center">
                        <Row>
                            <Col>
                            <h1>Novel Corona Virus</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolore, magni exercitationem maiores minus ipsam, labore neque quo quia illum aliquid similique voluptas modi! Modi deleniti magnam vitae laboriosam ex!
                            </p>
                            </Col>
                        </Row>
                        <Row>
                            <div className='embed-responsive embed-responsive-16by9' height='300px'>
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube-nocookie.com/embed/BtN-goy9VOY"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                >    
                                </iframe>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row className='mt-4 pt-2' style={{backgroundColor:'gray'}}>
                    <Counter deaths={54} confirmed={28} recovered={1000} />
                </Row>
                <Row className='mt-4 pt-2'>
                    <Col>
                        <h1>What is Corona Virus?</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, magnam! Atque corrupti qui pariatur nemo dolor, alias, consectetur ipsam non quibusdam a hic et amet suscipit! Perferendis voluptatum saepe quibusdam amet soluta beatae ratione, harum fugiat cupiditate maiores repellendus explicabo totam neque error. Aliquam cum expedita quas laborum quo id?
                        </p>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default Home
