import Customer from '../src/Customer';
import { customers, rooms, bookings, roomServices } from './sample-data.js';
import domUpdates from '../src/domUpdates';
var chai = require('chai');
var expect = chai.expect;

describe('Customer', function() {
  let customer;

  beforeEach(function() {
    customer = new Customer(customers, 'Autumn Toy');
  }) 

  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Hotel', function() {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should return the customer information', function(){
    customer.grabCustomerInformation();
    expect(customer.foundCustomer).to.eql({ id: 1, name: 'Autumn Toy' })
  })

});