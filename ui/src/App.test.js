import { render, screen } from '@testing-library/react'
import App from './App'

//msw imports
import { setupServer } from 'msw/node'
import { handlers } from './mocks/handlers'

// declare which API requests to mock
const server = setupServer(...handlers)

// establish API mocking before all tests
beforeAll(() => server.listen())// reset any request handlers that are declared as a part of our tests
afterEach(() => server.resetHandlers()) // (i.e. for testing one-time error scenarios)
afterAll(() => server.close()) // clean up once the tests are done

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
