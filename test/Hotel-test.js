import Hotel from '../src/Hotel';
import { customers, rooms, bookings, roomServices } from './sample-data.js';
import domUpdates from '../src/domUpdates';
var chai = require('chai');
var expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(domUpdates, [
  'totalRoomsDomUpdates',
  'todayTotalAvailaleRooms',
  'totalDailyDebts',
  'displayCustomerTotalCost'
], () => true);


describe('Hotel', function() {
  let hotel;

  beforeEach(function() {
    hotel = new Hotel(customers, rooms, bookings, roomServices, '21/08/2019');
  }) 

  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', function() {
    expect(hotel).to.be.an.instanceof(Hotel);
  });

  it('should show the available rooms for today', function(){
    expect(hotel.todayTotalRoomsAvailable()).to.equal(17)
  });

  it('should show the total debts for today', function(){
    expect(hotel.todayTotalDebts()).to.equal(809.86)
  });

  it('should calculate the total cost of rooms today', function(){
    expect(hotel.todayRoomsCost()).to.equal(774.92)
  });

  it('should calculate the total cost of Room Service today', function() {
    expect(hotel.todayRoomServiceCost()).to.equal(34.94)
  });

  it('should return the total occupied percentage', function(){
    expect(hotel.occupiedPercentage()).to.equal(15)
  })

});