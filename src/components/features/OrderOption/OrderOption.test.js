import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

describe('Component OrderOption', () => {
  it ('should be render without crashing', () => {
    const component = shallow(<OrderOption
      type = 'text'
      name = 'name'
    />);
    expect(component).toBeTruthy();
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  it('should render correct title name', () => {
    const expectedTitle = 'name';
    const expectedType = 'text';
    const component = shallow(<OrderOption name={expectedTitle} type={expectedType} />);

    expect(component.find('.title').text()).toEqual(expectedTitle);
  });

  const optionTypes = {
    dropdown: 'OrderOptionDropdown',
    icons: 'OrderOptionIcons',
    checkboxes: 'OrderOptionCheckboxes',
    number: 'OrderOptionNumber',
    text: 'OrderOptionText',
    date: 'OrderOptionDate',
  };

  const mockProps = {
    id: 'abc',
    name: 'Lorem',
    values: [
      {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
      {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
    ],
    required: false,
    currentValue: 'aaa',
    price: '50%',
    limits: {
      min: 0,
      max: 6,
    },
  };

  const mockPropsForType = {
    dropdown: {},
    icons: {},
    checkboxes: {currentValue: [mockProps.currentValue]},
    number: {currentValue: 1},
    text: {},
    date: {},
  };

  const testValue = mockProps.values[1].id;
  const testValueNumber = 3;

  for(let type in optionTypes){
    describe(`Component OrderOption with type=${type}`, () => {

      /* test setup */

      let component;
      let subcomponent;
      let renderedSubcomponent;
      let mockSetOrderOption;

      beforeEach(() => {
        mockSetOrderOption = jest.fn();
        component = shallow(
          <OrderOption
            type={type}
            setOrderOption={mockSetOrderOption}
            {...mockProps}
            {...mockPropsForType[type]}
          />
        );
        subcomponent = component.find(optionTypes[type]);
        renderedSubcomponent = subcomponent.dive();
      });

      /* common tests */
      // it('passes dummy test', () => {
      //   expect(1).toBe(1);
      // });

      it(`renders ${optionTypes[type]}`, () => {
        expect(subcomponent).toBeTruthy();
        expect(subcomponent.length).toBe(1);
      });

      /* type-specific tests */
      switch (type) {
        case 'dropdown': {
          /* tests for dropdown */
          it('contains select and options', () => {
            const select = renderedSubcomponent.find('select');
            expect(select.length).toBe(1);

            const emptyOption = select.find('option[value=""]').length;
            expect(emptyOption).toBe(1);

            const options = select.find('option').not('[value=""]');
            expect(options.length).toBe(mockProps.values.length);
            expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
            expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });
          break;
        }

        case 'icons': {
          it('div contains icon', () => {
            const div = renderedSubcomponent.find('div');
            expect(div.length).toBe(1);

            const emptyIcon = div.find('Icon[name="times-circle"]').length;
            expect(emptyIcon.length).toBe(1);

            const options = div.find('Icon').not('[name="times-circle"]');
            expect(options.length).toBe(mockProps.values.length);
            expect(options.at(0).prop('name')).toBe(mockProps.values[0].id);
            expect(options.at(1).prop('name')).toBe(mockProps.values[1].id);
          });

          it('should render run setOrderOption function on click', () => {
            renderedSubcomponent.find('div .icon').last().simulate('click');
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption.toBeCalledWith({[mockProps.id]: testValue}));
          });
          break;
        }

        case 'checkbox': {
          it('input contains type', () => {
            const div = renderedSubcomponent.find('div');
            expect(div.length).toBe(1);

            const inputs = div.find('input');
            expect(div.length).toBe(1);

            expect(inputs.length).toBe(mockProps.values.length);
            expect(inputs.at(0).prop('type')).toBe('checkbox');
            expect(inputs.at(1).prop('type')).toBe('checkbox');
            expect(inputs.at(0).prop('value')).toBe(mockProps.values[0].id);
            expect(inputs.at(1).prop('value')).toBe(mockProps.values[1].id);
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find(`input[value='${testValue}']`).simulate('change', {currentTarget: {checked: true}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue] });
          });
          break;
        }

        case 'number': {
          it('contains input', () => {
            const div = renderedSubcomponent.find('input');
            expect(div.length).toBe(1);

            const input = div.find('input');
            expect(div.length).toBe(1);
            expect(input.length).toBe(1);
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
          });
          break;
        }

        case 'text': {
          it('div contains input', () => {
            const div = renderedSubcomponent.find('input');
            expect(div.length).toBe(1);

            const input = div.find('input');
            expect(div.length).toBe(1);
            expect(input.length).toBe(1);
          });

          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
          });
          break;
        }

        case 'datePicker': {
          it('should run setOrderOption function on change', () => {
            renderedSubcomponent.find(DatePicker).simulate('change', testValue);
            expect(mockSetOrderOption).toBeCalledTimes(1);
            expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue});
          });
          break;
        }
      }
    });
  }
});


