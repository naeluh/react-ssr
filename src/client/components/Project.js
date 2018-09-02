import React from 'react'
import { Link } from "react-router-dom"
// import data from '../data/data.json'

const createProject = (d, m) => {
    let project = ''
    for (let index = 0; index < d.work.length; index++) {
        let value = d.work[index];
        if (value.url === m.params.id) {
            let nextProject = index >= d.work.length - 1 ? 0 : index + 1
            project = <div className="background-content">
                <section className="offset60">
                    <h1 id="title">{value.title}</h1>
                </section>
                <section className="offset0">
                    <div id="image" className="imgHero" style={{ backgroundImage: `url(../data/${value.img})` }}></div>
                </section>
                <section className="offset60_2">
                    <h3><a id="link" target="_blank" href={value.link}>{value.link}</a></h3>
                    <p id="description" dangerouslySetInnerHTML={{ __html: `${value.siteInfo}` }}></p>
                </section>
                <section className="offset40">
                    <Link to={`/project/${d.work[nextProject].url}`} title="#" alt="#" id="next" className="next">
                        <i className="fa fa-arrow-right" aria-hidden="true">></i>
                    </Link>
                </section>
            </div>
        }
    }
    return project
}



class Project extends React.Component {
    
    render() {
        return (
            <div>
               {createProject(this.props.items, this.props.match)}
            </div>
        )
    }
}

export default Project