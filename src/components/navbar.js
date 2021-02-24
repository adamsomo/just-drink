import React from 'react';

class NavBar extends React.Component {
  render() {
    return(
    <div className="ui stackable inverted menu homeMenu">
    <div className="header item title">
      {this.props.title}
    </div>
    <a class="red item">
      About Us
    </a>
    <a class="item">
      Jobs
    </a>
    <a class="item active">
      Locations
    </a>
  </div> 
    );
  }
}
export default NavBar;