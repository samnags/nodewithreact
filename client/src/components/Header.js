import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            <li>
              <a>Login with Google </a>
            </li>
          </ul>
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
