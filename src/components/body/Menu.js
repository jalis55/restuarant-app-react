import React,{useState} from 'react'
import MenuItems from './MenuItems';
import DISHES from '../../data/dishes';

const Menu = () => {
    const [dishes]=useState(DISHES);
    console.log(dishes);
    const menu=dishes.map((dish)=>{
        return <MenuItems menu={dish} key={dish.id}/>
    });
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-5'>
                {menu}

            </div>

        </div>

    </div>
  )
}

export default Menu;