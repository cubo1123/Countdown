import React from 'react'
import { App } from 'components'
import ReactDOM from 'react-dom'
import { Store } from 'store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
