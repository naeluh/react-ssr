//===========//
// Layout.js //
//===========//
import React from 'react'
import Site from './layout/Site'
import Footer from './layout/Footer'
import Nav from './layout/Nav'
import { connect } from "react-redux"
import { fetchData } from '../actions/actions'

class Layout extends React.Component {
  
  componentWillUpdate() {
		window.scrollTo(0, 0);
	}

   componentDidMount() {
    this.props.dispatch(fetchData())
  }

  render() {
    const { error, loading, items, component, computedMatch } = this.props;

    const RouteComponent = component

    console.log(items)

    if (error) {
      return <div>Error! {error.message}</div>
    }

    if (items.work === undefined) {
      return <div>Loading...</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <Site>
        <Nav />
        <RouteComponent items={items} error={error} loading={loading} match={computedMatch}/>
        <Footer />
      </Site>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(Layout);