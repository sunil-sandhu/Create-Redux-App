import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../components/App';
import configureStore from '../redux/store/configureStore';
import { Provider } from 'react-redux'
const store = configureStore();


describe('App', () => {
  const app = mount(<Provider store={store}><App /></Provider>)
  
  it('renders without crashing', () => {
    mount(<Provider store={store}><App /></Provider>)
  });

  it('renders the title', () => {
    expect(app.find('h2').text()).toEqual('Our messages reducer is working')
  })

})


/*
it('renders without crashing', () => {
  // this can be used instead 
  // if you prefer CRAs default setup without enzyme
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/