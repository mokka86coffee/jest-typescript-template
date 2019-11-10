import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("[data-test='component-app']").length).toBe(2);
});

test('renders increment button', () => {

});

test('renders counter display', () => {

});

test('counter start from 0', () => {

});

test('clicking button increments counter', () => {

});