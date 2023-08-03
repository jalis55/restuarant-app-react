import React,{useState} from 'react'
import MenuItems from './MenuItems';
import DISHES from '../../data/dishes';
import DishDetails from './DishDetails';

const Menu = () => {
    const [dishes]=useState(DISHES);
    const [selectedDish,setselectedDish]=useState(null);
    const onSelectedDish=(dish)=>{
        console.log(dish);
        setselectedDish(dish);
    }
    const menu=dishes.map((dish)=>{
        return <MenuItems menu={dish} onSelectedDish={onSelectedDish} key={dish.id}/>
    });

    const activeDishe=selectedDish ?<DishDetails dish={selectedDish}/>:null
    


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-5'>
                {menu}

            </div>
            <div className='col-7'>
                {activeDishe}
            </div>

        </div>

    </div>
  )
}

export default Menu;