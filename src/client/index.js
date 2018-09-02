import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers/reducers'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'
import { routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import './index.scss'
import routes from './routes';

// const siteBaseUrl = window.location.origin.replace(['http://', 'https://'], '')
const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      promise(),
      thunk,
      createLogger()
    )
  )
);

const render = () => {
  ReactDOM.render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('root'))
  registerServiceWorker()
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./components/Layout', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./reducers/reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
  })
}