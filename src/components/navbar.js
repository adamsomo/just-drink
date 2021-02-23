const NavBar = (props) => 
    <div className="ui stackable inverted menu">
    <div className="header item title">
      {props.title}
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

export default NavBar;