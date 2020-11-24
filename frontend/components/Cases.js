import React, { Component,  useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import Axios from 'axios';
import { setCases as setCasesAction, getCases as getCasesAction } from '../actions/index';

export class Cases extends Component {

    setCases = () => {
        Axios.get('http://localhost:8000/api/cases/', {}, {
            headers: {
            'Content-Type': 'application/json',
            }
          }
        )
        .then(data => {
            console.log(data.data[0])
            this.props.dispatch(setCasesAction(data.data[0].confirmed,data.data[0].deaths,data.data[0].recovered))

        })
    }

    getCases = () => {
        getCasesAction(this.props.dispatch)
    }

    componentWillMount() {
        this.setCases()
    }

    // <ul>
    //     <li>Confirmed: {(this.props.cases.confirmed) ? this.props.cases.confirmed : 'Loading..'}</li>
    //     <li>Recovered: {(this.props.cases.recovered) ? this.props.cases.recovered : 'Loading..'}</li>
    //     <li>Deaths: {(this.props.cases.deaths) ? this.props.cases.deaths : 'Loading..'}</li>
    // </ul>

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                            <h3>Confirmed</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <h5>{(this.props.cases.confirmed) ? this.props.cases.confirmed : 'Loading..'}</h5>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                            <h3>Recovered</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <h5>{(this.props.cases.recovered) ? this.props.cases.recovered : 'Loading..'}</h5>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                            <h3>Deaths</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <h5>{(this.props.cases.deaths) ? this.props.cases.deaths : 'Loading..'}</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    cases: state.cases,
    loading: true
});

export default connect(mapStateToProps)(Cases);
