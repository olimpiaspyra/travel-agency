import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link to address', () => {
    const expectedLink = '/trip/abc';
    const expectedLinkId = 'abc';
    const component = shallow(<TripSummary
      id = {expectedLinkId}
      image = 'image.jpg;'
      name = 'name'
      cost = '100'
      days = {1}
      tags ={[]}
    />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });
  it('img has correct src and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary
      id ='abc'
      image = {expectedSrc}
      name = {expectedAlt}
      cost = '100'
      days = {1}
      tags = {[]}
    />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  it('should render correct props name, cost, days', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDays = 1;

    const component = shallow(<TripSummary
      id ='abc'
      image = 'image.jpg'
      name = {expectedName}
      cost = {expectedCost}
      days = {expectedDays}
      tags = {[]}
    />);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('span').at(1).text()).toEqual(`from ${expectedCost}`);
    expect(component.find('span').at(0).text()).toEqual(`${expectedDays} days`);
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should tags render in right order in array', () => {
    const expectedTags = ['one', 'two', 'three'];

    const component = shallow(<TripSummary
      id = 'abc'
      image = 'image.jpg;'
      name = 'name'
      cost = '100'
      days = {1}
      tags = {expectedTags}
    />);
    expect(component.find('.tag').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTags[2]);
  });
  it('should not render if props tags is false', () => {
    const component = shallow(<TripSummary
      id = 'abc'
      image = 'image.jpg;'
      name = 'name'
      cost = '100'
      days = {1}
      tags = {[]}
    />);
    expect(component.hasClass('tags')).toBe(false);
  });
});
