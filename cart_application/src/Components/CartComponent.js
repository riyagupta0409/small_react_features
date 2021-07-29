import React from 'react'

function CartComponent(props) {

    var cartItems = props.cartItems ; 
    var items = props.items ; 
    var price = 0;


    return (
        <div className="cart d-flex flex-column  " style={{ zIndex : 10}}>
        <button className="closebtn" onClick={props.closeCart}>&times;</button>
        <div className="co" >
            <h4 className="font-weight-bold f-2 m-0">Your Cart</h4>
            <h6 className="item-count m-0 ml-2" ><span id="show_total_items" className="mr-1">{cartItems.length} </span>Items</h6>
        </div>
        <div className='mt-3' id="cart_items">
        {   cartItems.length === 0 ? ''
            :
            
                cartItems.map(item_id => {                   
                    return (
                        
                        <div key={items[item_id-1].id}>
                            <span style={{display: 'none'}}>{price = price + (items[item_id-1].price * items[item_id-1].quantity) }</span>

                            <div className='d-flex flex-row justify-content-between align-items-baseline item-div px-3' >
                                <h5 className="mt-4 font-weight-normal mb-0 font-italic cart-item-name">{items[item_id-1].name}</h5>
                                <button className="style_remove_button" onClick={() => props.removeItemFromCart(items[item_id-1].id)}><i className="fa fa-trash">Del</i></button>
                            </div>    
                            {
                            <div className='d-flex w-100 justify-content-between align-items-baseline px-4'>
                                <h5 className=" f-2 font-weight-bolder">${items[item_id-1].price}.00 </h5>       
                                <div className='p-1 px-3 add_minus_button_in_cart'>            
                                    <button className='minus-btn-cart' onClick={() => props.decreaseQuantity(item_id)}> - </button>
                                    <span>{items[item_id-1].quantity}</span>
                                    <button className='plus-btn-cart' onClick={() => props.increaseQuantity(item_id)}> + </button>
                                </div>
                            </div>
                            }
                           
                        </div>
                    )
                })
               
        }    
         {
            cartItems.length !==0 ?
            <div className="d-flex justify-content-center">
            <button className="text-center justify-self-center place_order_button mt-4 m-1 mx-auto " onClick={props.emptyCart}>&nbsp; &#8226; &nbsp;Place Order &nbsp; &#8226; &nbsp;<span id="Total_amount">${price}</span> </button>
            </div>
            : ''
            }
        </div>    
        </div>
    )
}

export default CartComponent
