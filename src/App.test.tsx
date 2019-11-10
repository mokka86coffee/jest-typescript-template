import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shallowWrapper for the App component.
 * @function setup
 * @param {any} state
 * @param {Object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (state = null, props = {}):Enzyme.ShallowWrapper => (
  shallow(<App {...props}/>)
);

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {string} value - string selector 
 * @param {ShallowWrapper} wrapper - Enzyme ShallowWrapper to search within
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (value: string, wrapper?: Enzyme.ShallowWrapper): Enzyme.CommonWrapper => {
  const shallowWrapper = wrapper || setup();
  return shallowWrapper.find(`[data-test='${value}']`);
}

test('renders without error', () => {
  expect(findByTestAttr('component-App').length).toBe(1);
});

test('renders increment button', () => {
  expect(findByTestAttr('component-increase-button').length).toBe(1);
});

test('renders decrease button', () => {
  expect(findByTestAttr('component-decrease-button').length).toBe(1);
});

test('renders counter display', () => {
  expect(findByTestAttr('component-counter-display').length).toBe(1);
});

test('counter start from 0', () => {
  expect(setup().state('counter')).toBe(0);
});

describe('test incrementing / decrementing', () => {
  const wrapped = setup();
  const buttonIncrease = findByTestAttr('component-increase-button', wrapped);
  const buttonDecrease = findByTestAttr('component-decrease-button', wrapped);

  test('clicking button increments counter', () => {
    buttonIncrease.simulate('click');
    expect(wrapped.state('counter')).toBe(1);
  });
  
  test('render new value after clicking increment', () => {
    const display = findByTestAttr('component-counter-display', wrapped);
    expect(display.text()).toContain('1');
  });

  test('clicking button decrements counter', () => {
    buttonDecrease.simulate('click');
    expect(wrapped.state('counter')).toBe(0);
  });

  test('render error if decrement button clicked and the counter value is 0', () => {
    buttonDecrease.simulate('click');
    const display = findByTestAttr('component-counter-display', wrapped);
    expect(display.text()).toContain('Below 0, can\'t do it :)');
  });

});
