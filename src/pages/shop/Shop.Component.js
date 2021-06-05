import React, { useEffect } from "react";
import "./Shop.style.scss";
import { Route } from "react-router-dom";
import CategoryPageContainer from '../Category/Category.Container';
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../reducers/ShopReducer/Shop.Actions";
import CollectionViewContainer from '../../Components/CollectionViewComponent/CollectionView.Container';


const ShopComponent = ({fetchCollectionStart, match}) => {

  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);  // this is to tell useEffect to run only if fetchCollectionStart changes... 

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionViewContainer}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={CategoryPageContainer}
        />
      </div>
    );
  }



export default connect(null, { fetchCollectionStart })(ShopComponent);
