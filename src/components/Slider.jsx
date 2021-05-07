import React from 'react'
import Card from 'react-bootstrap/Card'
import sun from '../assests/sun.png'

const Slider = ({ objects }) => {

    return <div className = "slider">
        {objects.map( (item, i) =>(
            <div className="slider-card" key={i}>
            {console.log(`he`)}
                <Card className = 'lg-4 sm-6 container-fluid'>
                    <Card.Body>
                        <Card.Title>{item}</Card.Title>
                        <Card.Text> <img src={sun} alt="placeholder" /> 68°</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        ))}
    </div>
}

export default Slider
