import { screen } from '@testing-library/react'
import { App } from './app'
import { render } from './test-utils'
import './utils/__tests__/mediaMock'
import { MockedProvider } from '@apollo/client/testing'
describe('App test', () => {
  test('Renders login', () => {
    render(
<MockedProvider>
        <App />
      </MockedProvider>
)
    expect(screen.getByText('PORTAL LOG IN')).toBeTruthy()
  })
})
