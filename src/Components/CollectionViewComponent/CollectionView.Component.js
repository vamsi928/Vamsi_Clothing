import React from "react";
import "./CollectionView.style.scss";
import PreviewComponent from "../PreviewComponent/PreviewComponent";
import { connect } from "react-redux";

const CollectionViewComponent = ({ collections }) => {
  return (
    <div className="collection-view">
      {collections.map((collection) => (
        <PreviewComponent collection={collection} key={collection.id} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ shopDataReducer: { collections } }) => {
  return {
    collections,
  };
};

export default connect(mapStateToProps, null)(CollectionViewComponent);
