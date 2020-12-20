import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store, persistor} from 'store'
import {PersistGate} from 'redux-persist/integration/react'

import App from './app'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
)
