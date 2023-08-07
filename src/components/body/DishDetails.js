import React from 'react';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,} from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = ({dish}) => {
  return (
    <Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      {dish.name}
    </CardTitle>

  </CardBody>
  <img
    alt="Card cap"
    src={dish.image}
    width="100%"
  />
  <CardBody>
    <CardText style={{textAlign:'justify'}}>
      {dish.description}
    </CardText>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Price:{dish.price}
    </CardSubtitle>
    <hr/>
    <LoadComments comments={dish.comments}/>

  </CardBody>
</Card>
  )
}

export default DishDetails