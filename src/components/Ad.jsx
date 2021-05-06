import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Adblock from '../assests/adblock.png'

const Ad = () => {
    return <>
        <Card id = "ad" className = "col-lg-2">
            <Card.Body style = {{display: 'flex', flexDirection: 'column'}}>
                <Card.Img variant="top" src= {Adblock} style = {{width: '50%', margin: '0 auto'}}/>
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
