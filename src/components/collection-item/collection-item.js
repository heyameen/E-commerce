import './collection-item.scss';

import React from 'react';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <p className="text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque 
      corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident...</p>
      <div className="cta">
        <span className='price'>${price} </span>
        <button className="add">Add to cart</button>
        {/* <span className="icon"><i class="ri-shopping-cart-2-fill"/></span> */}
      </div>
      
      
    </div>
  </div>
);

export default CollectionItem;