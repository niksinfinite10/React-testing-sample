import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import Home from './Home';
import InputArea from './InputArea';
import BeerList from './BeerList';

describe('<Home />', () => {
  it('Should have InputArea and BeerList', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.containsAllMatchingElements([
      <InputArea />,
      <BeerList />,
    ])).to.be.equal(true);
  });

  it('adds item to the list', () => {
    const wrapper = shallow(<Home />);
    // here we are using instace because we need context of the application
    wrapper.instance().addItem('uncle sam');
    expect(wrapper.state('beers')).to.eql(['uncle sam']);
  });

  it('should not add empty string to the list', () => {
    const addItemSpy = spy();
    const wrapper = shallow(<InputArea onSubmit={addItemSpy} />);
    const addButton = wrapper.find('button');
    addButton.simulate('click');
    // when there is an empty string than it will not call the onSubmit method
    expect(addItemSpy.calledOnce).to.equal(false);
  });

  // it('should not add the same value to the array', () => {
  //   const addItemSpy = spy();
  //   const wrapper =  shallow(<Home />);
  // });

  it('should add item to array', () => {
    const wrapper = shallow(<Home />);
    const inputArea = wrapper.find('InputArea');
    inputArea.props().onSubmit('Nikhil');
    expect(wrapper.state('beers')).to.eql(['Nikhil']);
  });
});

describe('<BeerList />', () => {
  it('should start with empty list', () => {
    const wrapper = shallow(<BeerList items={[]} />);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('should render undefined items', () => {
    const wrapper = shallow(<BeerList items={undefined} />);
    expect(wrapper.find('li')).to.have.length(0);
  });

  it('sould render few item from the items', () => {
    const wrapper = shallow(<BeerList items={['nikhil', 'erika', 'simmy']} />);
    expect(wrapper.find('li')).to.have.length(3);
  });
});

describe('<InputArea />', () => {
  it('should have input ', () => {
    const wrapper = shallow(<InputArea />);
    expect(wrapper.containsAllMatchingElements([
      <input />,
      <button>Add</button>,
    ])).to.equal(true);
  });
  it('Should accept input', () => {
    const wrapper = mount(<InputArea />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Resign' } });
    expect(wrapper.state('text')).to.equal('Resign');
    expect(input.props().value).to.equal('Resign');
  });
});
