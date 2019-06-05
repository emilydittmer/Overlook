import Booking from '../src/Bookings';
import { customers, rooms, bookings, roomServices, } from './sample-data.js';
var chai = require('chai');
var expect = chai.expect;

describe('Bookings', function() {
  let booking;

  beforeEach(function() {
    booking = new Booking(bookings);
  }) 

  it('should be a function', function() {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Bookings', function() {
    expect(booking).to.be.an.instanceof(Booking);
  });

  it('should show the most common booking date', function() {
    expect(booking.mostPopularBookingDate()).to.equal('25/08/2019')
  });

  it('should show the day will the most rooms available', function(){
    expect(booking.highestAvailableDay(
    {
    '21/08/2019': 4,
    '22/08/2019': 3,
    '23/08/2019': 3,
    '24/08/2019': 4,
    '25/08/2019': 5,
    '26/08/2019': 3,
    '27/08/2019': 4,
    '28/09/2019': 2 
    })).to.equal('28/09/2019')
  })
})