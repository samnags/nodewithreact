import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Log In With Google</a>
          </li>
        );
      default:
        return [
          <li key="payments">
            <Payments />
          </li>,
          <li style={{ margin: '0 10px' }} key="credits">
            Credits: {this.props.auth.credits}
          </li>,
          <li key="logout">
            <a href="/api/logout ">Log Out</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

// Destructured
function mapStateToProps({ auth }) {
  return { auth };
}

// Original
// function mapStateToProps(state) {
//   return {
//     auth: state.auth
//   };
// }

export default connect(mapStateToProps, null)(Header);
