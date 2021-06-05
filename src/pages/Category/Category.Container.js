import { connect } from 'react-redux';
import WithSpinner from "../../Components/with-spinner/with-spinner.Component";
import CategoryPage from './Category.Component';

const mapStateToProps = ({shopDataReducer : {isFetching}}) => {
    return {
        isLoading : isFetching
    }
}


const CategoryPageContainer = connect(mapStateToProps,null)(WithSpinner(CategoryPage));

export default CategoryPageContainer;