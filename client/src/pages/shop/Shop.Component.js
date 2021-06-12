import React, { useEffect, lazy, Suspense } from "react";
import "./Shop.style.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../reducers/ShopReducer/Shop.Actions";
import SpinnerComponent from '../../Components/SpinnerComponent/Spinner.Component';

const CategoryPageContainer = lazy(() => import('../Category/Category.Container'));

const CollectionViewContainer = lazy(() => import('../../Components/CollectionViewComponent/CollectionView.Container'));


const ShopComponent = ({fetchCollectionStart, match}) => {

  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);  // this is to tell useEffect to run only if fetchCollectionStart changes... 

    return (
      <div className="shop-page">
        <Suspense fallback={<SpinnerComponent />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionViewContainer}
        />
        <Route
          path={`${match.path}/:categoryId`}
          component={CategoryPageContainer}
        />
        </Suspense>
      </div>
    );
  }



export default connect(null, { fetchCollectionStart })(ShopComponent);
