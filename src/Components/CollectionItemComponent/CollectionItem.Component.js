import React from 'react';
import CustomButton from '../Custom-button/Custom-button.Component';
import {additem} from '../../actions/Cart/showCart';
import {connect} from 'react-redux';
import './CollectionItem.style.scss';

const CollectionItem = ({item,additem}) => (
   
            <div className="collection-item" key={item.id}>
              <div
                className="image"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></div>

              <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">${item.price}</span>
              </div>
              <CustomButton type="button" inverted="inverted" onClick={() => additem(item)}>ADD TO CART</CustomButton>
            </div>
          
    )


export default connect(null,{additem})(CollectionItem);