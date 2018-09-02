//========//
// App.js //
//========//
import React from 'react'
import Layout from './components/Layout'
import Helmet, { HelmetProvider } from 'react-helmet-async';

class App extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <Helmet>
          <title>Turbo Todo</title>
          <meta name="description" content="Todos on steroid!" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <Layout />
      </HelmetProvider>
    )
  }
}

export default App