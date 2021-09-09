/* eslint-disable prettier/prettier */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import TestContainer from '../renderer/components/TestContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('Imported Component', () => {
  it('should match exact snapshot', () => {
    const tree = renderer.create(<TestContainer />).toJSON();
    expect(tree.props.className).toEqual('hoho');
  });
});

describe('Hard Component', () => {
  it('should match exact snapshot', () => {
    const counter = (
      <div className="hoho">
        <h1>Hola</h1>
      </div>
    );
    const tree = renderer.create(counter).toJSON();
    expect(tree.props.className).toEqual('hoho');
  });
});
