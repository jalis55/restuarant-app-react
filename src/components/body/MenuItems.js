import React from 'react'
import {Card,CardImg,CardImgOverlay,CardTitle,CardText} from 'reactstrap'

const MenuItems = ({menu,onSelectedDish}) => {
    
  return (
<div>
  <Card inverse style={{padding:10,margin:10,cursor:"pointer"}} onClick={()=>onSelectedDish(menu)}>
    <CardImg
      alt={menu.name}
      src={menu.image}
      style={{
        height: 270,
        opacity:0.8
      }}
      width="100%"
    />
    <CardImgOverlay>
      <CardTitle tag="h5" style={{fontSize:20,fontWeight:'bold',color:'black'}}>
        {menu.name}
      </CardTitle>

    </CardImgOverlay>
  </Card>
</div>
  )
}

export default MenuItems;