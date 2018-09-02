import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import data from '../../data/data.json'

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
            <li className={match ? "active bk" : "bk"}>
                {match ? "> " : ""}
                <p> <Link to={to}>{label}</Link> </p>
            </li>
        )}
    />
);

class Links extends React.Component {

    state = {
        isActive: false,
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
            links.push(<OldSchoolMenuLink activeOnlyWhenExact={true} to={value.link} label={value.title} />)
        }
        return links
    }

    render() {
        return (
            <Router>
                <div className={this.state.isActive ? 'hide-overlay' : ''}>
                    <nav>
                        <ul>
                            <li onClick={this.toggleNav} class="list one"></li>
                        </ul>
                    </nav>

                    <div class="overlay">
                        <div class="overlay-content">
                            <div id="close" onClick={this.toggleNav}><span>close</span></div>
                            <ul id="weblist">
                                {this.createLinks(data)}
                            </ul>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }

}

export default Links;