import React from "react";
import "./Category.style.scss";
import { connect } from "react-redux";
import CollectionItem from '../../Components/CollectionItemComponent/CollectionItem.Component';

const CategoryPage = ({categoryItems}) => {
  return (
    <div className="collection-page">
      <h2 className="title">{categoryItems[0].title}</h2>
       <div className="items">
               {categoryItems[0].items.map( item => (
                   <CollectionItem item={item} key={item.id}/>
               ))}
       </div>
    </div>
  );
};

const mapStateToProps = ({ shopDataReducer: { collections } }, ownProps) => {
  return {
    categoryItems: collections ? collections.filter((collection) => {
      return collection.routeName === ownProps.match.params.categoryId;
    }) : null,
  };
};

export default connect(mapStateToProps, null)(CategoryPage);
