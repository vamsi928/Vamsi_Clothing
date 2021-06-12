import React from "react";
import { additem } from "../../reducers/CartReducer/showCart";
import { connect } from "react-redux";
//import "./CollectionItem.style.scss";
import {CollectionFooterContainer,CollectionItemContainer,ImageContainer,NameContainer,PriceContainer,Additem} from './CollectionItem.styles';

//This component uses styled component styling from CollectionItem.styles.js

const CollectionItem = ({ item, additem }) => (
  <CollectionItemContainer key={item.id}>
    <ImageContainer className="image"
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    ></ImageContainer>

    <CollectionFooterContainer>
      <NameContainer className="name">{item.name}</NameContainer>
      <PriceContainer className="price">${item.price}</PriceContainer>
    </CollectionFooterContainer>
    <Additem type="button" inverted="inverted" onClick={() => additem(item)}>
      ADD TO CART
    </Additem>
  </CollectionItemContainer>
);

export default connect(null, { additem })(CollectionItem);
