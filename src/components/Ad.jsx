import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Ad = () => {
    return <>
        <Card className = "col-lg-2">
            <Card.Body>
                <Card.Img variant="top" src="" />
                <Card.Title>Tired of Ads? Get an Adblocker</Card.Title>
                <Card.Text>
                    This Add Blocker will stop those bothersome ads that plague your websites. This includes youtube and facebook ads.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </>
}

export default Ad
