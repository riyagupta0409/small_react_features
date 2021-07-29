import React from 'react'

function AllItems(props) {
    return (
        <div className="all-items container row mx-auto mt-4">
            {props.items.map(item => { return( 
                <div className='item-div mb-3 p-2 px-4 col-sm-6 col-lg-4 d-flex flex-column' key={item.id}>
                    <img src={`${item.img_src}`}  alt="p"/>
                    <div className="d-flex flex-row justify-content-between align-items-baseline">
                        <h5 className=" f-2 mt-4 ">{item.name}</h5>
                    </div>

                    <div className="d-flex w-100 justify-content-between align-items-baseline">
                        <h5 className=" f-2 font-weight-bolder">${item.price}.00 </h5>
                        {item.quantity === 0 
                            ?    
                            <button className='add-to-cart-btn' onClick={() => props.increaseQuantity(item.id)}>Add to cart </button> 
                            :
                            <div className='plus-minus p-1 px-3'>
                                <button className='minus-btn' onClick={() => props.decreaseQuantity(item.id)}> - </button>
                                <span className="mx-25">{item.quantity}</span>
                                <button className='plus-btn' onClick={() => props.increaseQuantity(item.id)}> + </button>
                            </div>
                        }
                    </div>
                </div>
            )})}
        </div>
    )
}

export default AllItems
