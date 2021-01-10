import React from 'react'
import ReactDOM from 'react-dom'

import {Hello} from './hello'
import {Store} from './Store';

ReactDOM.render(
  <Hello counter={new Store()}/>,
  document.body
)
