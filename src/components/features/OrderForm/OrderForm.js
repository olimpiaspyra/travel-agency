import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost, tripId, tripName, tripCountry) => {
  console.log({options});
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
    tripCountry,
  };

  if(options.name === '' || options.contact === ''){
    alert('Please complete name and contact');
  }

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, options, setOrderOption, tripId, tripName, tripCountry}) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <PageTitle text='Trip options' />
      </Col>
      {pricing.map((option) => (
        <Col key={option.id} md={4}>
          <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
        </Col>
      ))}
      <Col xs={12}>

        <OrderSummary tripCost={tripCost} options={options}/>
        <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, tripCountry)}>Order now!</Button>
      </Col>
    </Row>
  </Grid>
);


OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  tripCountry: PropTypes.string,
};

export default OrderForm;
