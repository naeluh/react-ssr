import React from 'react'
import { Link } from "react-router-dom"

class About extends React.Component {
  
  createCV = (d) => {
    let html = []
    let lists = []
    for (let i = 0; i < d.cv.length; i++) {
      let v = d.cv[i]
      html.push(
        <h3 key={v.header} className={`h3 ${v.class}`}>{v.header}</h3>
      )
      for (let i = 0; i < v.items.length; i++) {
        let item = v.items[i]
        lists = []

        for (let i = 0; i < item.items.length; i++) {
          let listItem = item.items[i]
          lists.push(
            <li key={listItem} className="li">{listItem}</li>
          )
        }

        html.push(
          <div key={item.header + 'a'} className={`${v.class}`}>  
            <h4 key={item.header} className="h4">{item.header}</h4>
            <ul key={item} className="detail-list">{lists}</ul>
          </div>
        )
      }
    }
    return html
  }

  render() {
    return (
      <div className="background-content">
        <section className="offset60">
          <h1 id="title">About Nick Hulea</h1>
          {this.createCV(this.props.items)}
        </section>
        <section className="offset60">
          <p><Link to="/work">Work</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </section>
      </div>
    )
  }
}

export default About