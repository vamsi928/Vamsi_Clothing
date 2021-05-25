import React from "react";
import "./Preview.style.scss";
import CollectionItem from "../CollectionItemComponent/CollectionItem.Component";
import { connect } from "react-redux";
import { additem } from "../../actions/Cart/showCart";

const PreviewComponent = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.collection.title.toUpperCase()}</h1>
      <div className="preview">
        {props.collection.items
          .filter((item, index) => index < 4)
          .map(
            (item) => (
              <CollectionItem item={item} key={item.id} />
            ) //ussing filter function to take only items if index of it is less than 4
          )}
      </div>
    </div>
  );
};

export default connect(null, { additem })(PreviewComponent);
