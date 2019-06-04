import Customer from '../src/Customer';
import { customers, rooms, roomServices, bookings } from './sample-data.js';
import domUpdates from '../src/domUpdates';
var chai = require('chai');
var expect = chai.expect;

describe('Customer', function() {
  let customer;

  beforeEach(function() {
    customer = new Customer(customers, rooms, roomServices, bookings, 'Autumn Toy', '21/08/2019');
  }) 

  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Hotel', function() {
    expect(customer).to.be.an.instanceof(Customer);
  });

  it('should return the customer information', function(){
    customer.grabCustomerInformation();
    expect(customer.selectedCustomer).to.eql({ id: 1, name: 'Autumn Toy' })
  });

  it('should show the total amount the customer owes', function(){
    expect(customer.totalCustomerOwed().to.equal(295.54))
  })

});