import React from 'react'
import Card from 'react-bootstrap/Card'
import logo from '../assests/logo.png'

const Slider = ({ objects }) => {

    return <div className = "slider">
        {objects.map( (item, i) =>(
            <div className="slider-card" key={i}>
            {console.log(`he`)}
                <Card className = 'lg-4'>
                    <Card.Body>
                        <Card.Title>{item}</Card.Title>
                        <Card.Text> <img src={logo} alt="placeholder" /> 68°</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        ))}
    </div>
}

export default Slider
