import React from "react";
import "./Shop.style.scss";
import CollectionViewComponent from "../../Components/CollectionViewComponent/CollectionView.Component";
import {Route} from 'react-router-dom';
import CategoryPage from '../Category/Category.Component';

class ShopComponent extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionViewComponent} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
      </div>
    );
  }
}

export default ShopComponent;
