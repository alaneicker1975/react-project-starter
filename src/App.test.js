import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow, configure } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore([]);

describe('<App />', () => {
  let app;

  beforeEach(() => {
    const store = mockStore({
      title: 'Welcome!',
      subtitle: 'Your project starts here.',
      description:
        'With support for Redux, Jest, Enzyme, ESLint, Stylelint, Prettier, React Axe, and Travis CI.',
      links: [
        { url: 'https://parceljs.org/', text: 'Parcel' },
        { url: 'https://www.atomikui.com/', text: 'Atomik UI' },
      ],
    });

    app = shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('Should render without errors', () => {
    expect(app).toHaveLength(1);
  });
});
