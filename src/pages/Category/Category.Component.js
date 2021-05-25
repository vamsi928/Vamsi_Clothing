import React from "react";
import "./Category.style.scss";
import { connect } from "react-redux";
import CollectionItem from '../../Components/CollectionItemComponent/CollectionItem.Component';

const CategoryPage = ({categoryItems}) => {
    console.log(categoryItems[0]);
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
    categoryItems: collections.filter((collection) => {
      return collection.routeName === ownProps.match.params.categoryId;
    }),
  };
};

export default connect(mapStateToProps, null)(CategoryPage);
