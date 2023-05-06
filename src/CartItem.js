import React from 'react';

const CartItem = (props) => {

    const { price, title, qty } = props.product;
    const {
      product,
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteProduct
    } = props;


    return (
      
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} src={product.img} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img 
            alt="increase" 
            className="action-icons" 
             src="https://as2.ftcdn.net/v2/jpg/01/44/06/45/1000_F_144064561_G43YkxJSzqHHBn5sXUKSKGownX8Urshy.jpg"
             onClick={() => onIncreaseQuantity(product)}
              />
            <img 
            alt="decrease" 
            className="action-icons"
             src="https://as2.ftcdn.net/v2/jpg/02/78/84/57/1000_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg"
             onClick={() => onDecreaseQuantity(product)} />
        
            <img 
            alt="delete" 
            className="action-icons" 
            src="https://as1.ftcdn.net/v2/jpg/02/76/19/96/1000_F_276199650_Hs5K3QnXm9ZMBLd3DT44YcdWUIf8GHxO.jpg"
            onClick={() => onDeleteProduct(product.id)} />
          </div>
        </div>
      </div>
    );
  }


const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  },
  
}

export default CartItem;