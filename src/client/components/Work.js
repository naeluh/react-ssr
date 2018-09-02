import React from 'react'
import { Link } from "react-router-dom"
// import data from '../data/data.json'

class Work extends React.Component {
    createProjects = (d) => {
        let links = []
        for (let index = 0; index < d.work.length; index++) {
            let value = d.work[index];
            links.push(
                <section key={index} className="offset0"><Link to={`/project/${value.url}`} title="#" alt="#">
                    <div className="imgHero" style={{ backgroundImage: `url(./${value.img})` }}></div>
                    <h2 className="imgTitle">{value.title}</h2></Link>
                </section>
            )
        }
        return links
    }

    render() {
        return (
            <div className="background-content">
                <section className="offset60">
                    <h1 id="title">Work</h1>
                </section>
                {this.createProjects(this.props.items)}
            </div>
        )
    }
}



export default Work