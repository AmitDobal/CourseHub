import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
it("should render app with error", () =>{
  const {asFragment} = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
})
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Hello, friend/i);
//   expect(linkElement).toBeInTheDocument();
// });
