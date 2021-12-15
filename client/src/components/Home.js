import React from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import Forums from './forumComponents/AllForums'
import SingleForum from './forumComponents/SingleForum'
import AK from './ak'

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <main>
                <Container>
                    <Row>
                      <Col xs={12}>  <Forums /></Col>
                      
                    </Row>
                    {/* <Row>
                        <Forums />
                    </Row> */}
                </Container>
            </main>
        </div>
    )
}

export default Home
