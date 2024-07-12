import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e)=>{
        if (CartItems[e.id]>e) {
            return <div>
                        <div className='cartitems-format'>
                             <img src={e.image} className='carticon-product-icon'></img>
                             <p>{e.name}</p>
                             <p>${e.new_price}</p>
                             <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                             <p>{e.new_price*CartItems[e.id]}</p>
                             <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}}></img>
                        </div>
                        <hr/>
                   </div>
            
        }
      })}
    </div>
  )
}

export default CartItems
