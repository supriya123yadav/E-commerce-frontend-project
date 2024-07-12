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
        if (cartItems[e.id]>0) {
            return <div>
                        <div className='cartitems-format cartitems-format-main'>
                             <img src={e.image} className='carticon-product-icon'></img>
                             <p>{e.name}</p>
                             <p>${e.new_price}</p>
                             <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                             <p>${e.new_price*cartItems[e.id]}</p>
                             <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}}></img>
                        </div>
                        <hr/>
                   </div>
            
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
            <h1>cart Totals</h1>
            <div>
                <div className='cartitems-total-item'>
                    <p>Subtotal</p>
                    <p>${0}</p>
                </div>
                <hr/>
                <div>
                    <p></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
