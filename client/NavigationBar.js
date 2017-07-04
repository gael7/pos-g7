import React from 'react';

class NavigationBar extends React.Component {
  constructor(){
    super();
    
  }

  render(){
    return(
      <div>
        <nav>
          <div className="nav-wrapper black">
              <a href="/" className="brand-logo center">G7</a>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                  <li><a href="/">Register</a></li>
                  <li><a href="/management">Management</a></li>
                  <li><a href="#">Kitchen</a></li>
                </ul>
                <ul className="side-nav" id="mobile-demo">
                  <li><a href="#">Register</a></li>
                  <li><a href="/management">Management</a></li>
                  <li><a href="#">Kitchen</a></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default NavigationBar;
