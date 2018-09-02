import React from "react";
import { Link } from "react-router-dom";
import data from '../../data/data.json'

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact, callback }) => (

  <li onClick={callback} className={"bk"}>
    <Link to={to}>{label}</Link>
  </li>
);

class Nav extends React.Component {

  state = {
    isActive: true,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  createLinks = (d) => {
    let links = []
    for (let index = 0; index < d.nav.length; index++) {
      let value = d.nav[index];
      links.push(<OldSchoolMenuLink key={index.toString()} callback={this.toggleNav} activeOnlyWhenExact={true} to={value.link} label={value.title} />)
    }
    return links
  }

  render() {
    return (
      <div className={this.state.isActive ? 'hide-overlay' : ''}>
        <nav>
          <ul>
            <li onClick={this.toggleNav} className="list one"></li>
          </ul>
        </nav>

        <div className="overlay">
          <div className="overlay-content">
            <div id="close" onClick={this.toggleNav}><span>close</span></div>
            <ul id="weblist">
              {this.createLinks(data)}
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Nav;