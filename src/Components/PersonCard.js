import React from 'react'
import Card from 'react-bootstrap/Card'
function PersonCard({person}) {
    return (
        <Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="personal.png" />
  <Card.Body>
    <Card.Title>{person.name}</Card.Title>
    <Card.Text>
   <div>{person.name} {person.username}</div>
    <div>tel: {person.phone}</div>
    </Card.Text>
  </Card.Body>
</Card>
    )
}

export default PersonCard
