import React , {useState } from 'react';
import AllItems from './AllItems';
import CartComponent from './CartComponent';

function MainComponent(props) {

    const items_array = [{id:1, name:'DOZEN CUPCAKES',price:3,quantity:0,img_src:'../images/product-1.jpg'},{id:2, name:'CREAM COOKIES',price:4,quantity:0,img_src:'../images/product-2.jpg'},{id:3, name:'MINI DOZEN',price:5,quantity:0,img_src:'../images/product-3.jpg'},
    {id:4, name:'COOKIE DOUGH',price:6,quantity:0,img_src:'../images/product-4.jpg'} ,{id:5, name:'VANILLA CARAMEL',price:8,quantity:0,img_src:'../images/product-5.jpg'} ,{id:6, name:'CHOCOLATE CAKE',price:10,quantity:0,img_src:'../images/product-6.jpg'} ]
    
    const [items , updateItems] = useState(items_array)
    const [cartItems , updateCart] = useState([])
    const [show , showCart] = useState(false)

    const incrementQuantity = (id) => {
        for (const item of items){
            if (item.id === id) {
                var quant = item.quantity 
            }
        }
        if(quant===0) {
            addTocart(id)
        }
        updateItems(
            items.map(item => 
                item.id === id
                ? {...item, quantity:quant+1} 
                : item 
        ))
    }

    const decrementQuantity = (id) => {
        for (const item of items){
            if (item.id === id) {
                var quant = item.quantity 
            }
        }
        if(quant===1){
            removeFromCartArray(id)
        }
        updateItems(
            items.map(item => 
                item.id === id && item.quantity >0
                ? {...item, quantity:quant-1} 
                : item 
        ))
    }

    const addTocart = (id) => {
        updateCart(cartItems => cartItems.concat([id]));
    }

    const removeFromCartArray = (id) => {
        var index = cartItems.indexOf(id);
        updateCart( cartItems => cartItems.slice(0,index).concat(cartItems.slice(index+1,)))
    }

    const showcart = () => {
        showCart(true)
    }

    const closeCart = () => {
        showCart(false)
    }

    const removeItemFromCart = (id) => {
        updateItems(
            items.map(item => 
                item.id === id 
                ? {...item, quantity:0} 
                : item 
        ))
        removeFromCartArray(id)
    }

    const emptyCart = () => {
        updateItems(items_array)
        updateCart([])
    }

    return (

        <div className="mainComponent">
               <div className="cart-small container-fluid d-flex justify-content-between py-2 m-0 sticky-top" style={{ zIndex : 1}}>
                <h5 className="my-auto f-2 font-weight-bolder w-color" >Welcome to sweet Cake !!</h5>
                 <button className="nav-link my-1 " onClick={showcart}><span className="p-sm-2"><i className="fa fa-shopping-cart"></i><span className="pl-sm-1">CART</span></span></button>
             </div>
           <AllItems items={items} increaseQuantity={(id) => incrementQuantity(id)} decreaseQuantity={(id) => decrementQuantity(id)}/> 
           { show &&
           <CartComponent emptyCart={emptyCart} removeItemFromCart={(id) => removeItemFromCart(id)} items={items} cartItems={cartItems} closeCart={closeCart} increaseQuantity={(id) => incrementQuantity(id)} decreaseQuantity={(id) => decrementQuantity(id)}/>
           }
           </div>
    )
}

export default MainComponent
