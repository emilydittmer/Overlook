import domUpdates from './domUpdates';
import fetchData from '../utl/fetchData';

class Hotel {
  constructor (customerData, roomData, bookingData, roomServiceData, date) {
    this.customers = customerData;
    this.rooms = roomData;
    this.bookings = bookingData;
    this.roomServices = roomServiceData;
    this.date = date;
  }

  onLoad() {
    this.todayTotalRoomsAvailable();
    this.todayRoomsCost();
    this.todayRoomServiceCost();
    this.todayTotalDebts();
    this.occupiedPercentage();
  }

  todayTotalRoomsAvailable() {
    let totalRooms = this.rooms.length - this.bookings.filter(eachBooking => eachBooking.date === this.date).length;
    this.totalRoomsDomUpdates(totalRooms);
    return totalRooms;
  }
  
  todayRoomsCost() {
    let todayRooms = this.bookings.filter(eachBooking => eachBooking.date === this.date);
    let roomNumbers = todayRooms.map(room => room.roomNumber);
    let costPerRoom = roomNumbers.map(room => {
      return {
        room: room,
        roomCost: this.rooms.find(eachRoom => eachRoom.number === room).costPerNight
      }
    });
    return costPerRoom.reduce((acc, room) => {
      return acc += room.roomCost;
    }, 0);
  }
  
  todayRoomServiceCost() {
    let todayRoomService = this.roomServices.filter(service => service.date === this.date);
    let totalCost = todayRoomService.reduce((acc, sandwich) => {
      return acc += sandwich.totalCost
    }, 0);
    return totalCost;
  }
  
  todayTotalDebts() {
    let roomCost = this.todayRoomsCost();
    let roomServiceCost = this.todayRoomServiceCost();
    let totalDebts = roomCost + roomServiceCost;
    let total = Number(totalDebts.toFixed(2));
    domUpdates.totalDailyDebt(total);
    return total;
  }

  occupiedPercentage() {
    let availableRooms = this.todayTotalRoomsAvailable();
    let roomsBooked = this.rooms.length - availableRooms
    let percentage = (roomsBooked / this.rooms.length)*100
    domUpdates.dailyOccupiedPercentage(percentage);
    return percentage;
  }

  totalRoomsDomUpdates(rooms){
    domUpdates.todayTotalAvailaleRooms(rooms);
  }

}

export default Hotel;