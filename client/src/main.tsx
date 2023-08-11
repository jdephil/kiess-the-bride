import { ApolloProvider } from '@apollo/client'
import { client } from './services/apollo-client'
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
<ApolloProvider client={client}>
      <App />
    </ApolloProvider>
</React.StrictMode>,
)
