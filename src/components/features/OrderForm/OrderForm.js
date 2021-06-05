import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';

class OrderForm extends React.Component {
  render () {
    const {tripCost, options} = this.props;
    return (
      <Grid>
        <Row>
          {pricing.map(({option}) => (
            <Col key={option.id} md={4}>
              <OrderOption {...OrderOption}/>
            </Col>
          ))}
          <Col xs={12}>
            <PageTitle text='Trip options' />
            <OrderSummary tripCost={tripCost} options={options}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
