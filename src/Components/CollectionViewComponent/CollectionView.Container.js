import { connect } from 'react-redux';
import WithSpinner from "../../Components/with-spinner/with-spinner.Component";
import CollectionViewComponent from './CollectionView.Component';

const mapStateToProps = ({shopDataReducer : {isFetching}}) => {
    return {
        isLoading: isFetching
    }
}

const CollectionViewContainer = connect(mapStateToProps,null)(WithSpinner(CollectionViewComponent));

export default CollectionViewContainer;