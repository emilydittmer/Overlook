import RoomService from '../src/RoomService';
import { customers, rooms, roomServices, bookings } from './sample-data.js';
// import domUpdates from '../src/domUpdates';
var chai = require('chai');
var expect = chai.expect;

describe('RoomService', function() {
  let roomService;

  beforeEach(function() {
    roomService = new RoomService(roomServices, customers, 'Autumn Toy', '1', '21/08/2019');
  }) 

  it('should be a function', function() {
    expect(RoomService).to.be.a('function');
  });

  it('should be an instance of RoomService', function() {
    expect(roomService).to.be.an.instanceof(RoomService);
  });

  it('should display the room service orders for today', function() {
    expect(roomService.showOrdersToday()).to.eql([{
      userID: 1,
      date: "21/08/2019",
      food: "Generic Plastic Sandwich",
      totalCost: 9.48
    },
    {
      userID: 19,
      date: "21/08/2019",
      food: "Incredible Fresh Sandwich",
      totalCost: 8.2
    },
   {
      userID: 20,
      date: "21/08/2019",
      food: "Rustic Frozen Sandwich",
      totalCost: 17.26
    }])
  });

  it('should be able to return all order for a specific date', function() {
    expect(roomService.showOrderByDate('22/08/2019')).to.eql([{
      userID: 2,
      date: "22/08/2019",
      food: "Generic Soft Sandwich",
      totalCost: 24.24
    },
    {
      userID: 3,
      date: "22/08/2019",
      food: "Tasty Fresh Sandwich",
      totalCost: 13.07
    }]);
  });

  it('should return all room service orders for a specific customer', function() {
    expect(roomService.showOrdersByCustomer()).to.eql([{ 
      userID: 1,
      date: '21/08/2019',
      food: 'Generic Plastic Sandwich',
      totalCost: 9.48 }])
  });

  it('should show the total breakdown of purchases for a specific customer', function(){
    roomService.showOrdersByCustomer();
    expect(roomService.showTotalBreakDownOfPurchases([{ 
      userID: 1,
      date: '21/08/2019',
      food: 'Generic Plastic Sandwich',
      totalCost: 9.48 }])).to.eql([{
      date: '21/08/2019',
      food: 'Generic Plastic Sandwich',
      cost: 9.48 }])
  });

  it('should show the total amount spent by a specific customer on the selected date', function() {
    expect(roomService.showTotalSpentPerDay('21/08/2019')).to.equal(9.48);
  });

  it('should show the total spent by a customer', function() {
    expect(roomService.showTotalSpentByCustomer()).to.equal(9.48);
  })

});