import React from "react";
//import "./Header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../CartIconComponent/CartIcon.Component";
import CartDropdown from "../CartDropdownComponent/CartDropdown.Component";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
  OptionDiv,
} from "./Header.styles";
import { signOutStart } from '../../reducers/UserReducer/User.actions'

class HeaderComponent extends React.Component {
  // this component use styled component styles frmo Header.styles.js


  render() {
    return (
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/contact" className="option">
            CONTACT
          </OptionLink>
          {this.props.user ? (
            <OptionDiv onClick={() => this.props.signOutStart()}>SIGN OUT</OptionDiv>
          ) : (
            <OptionLink to="/signIn" className="option">
              SIGN IN
            </OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {this.props.showDropdown ? <CartDropdown /> : null}
      </HeaderContainer>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    user: state.userReducer.currentUser,
    showDropdown: state.cartReducer.showDropdown,
    shopData: state.shopDataReducer.collections,
  };
};

export default connect(mapStateToProps, { signOutStart })(HeaderComponent);
