import domUpdates from './domUpdates';

class Hotel {
  constructor(customers, rooms, bookings, roomService, date) {
    this.customers = customers;
    this.rooms = rooms;
    this.bookings = bookings;
    this.roomService = roomService;
    this.date = date;
  }

  todayTotalRoomsAvailable() {
    return this.rooms.length - this.bookings.filter(eachBooking => eachBooking.date === this.date).length;
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
    let todayRoomService = this.roomService.filter(service => service.date === this.date);
    let totalCost = todayRoomService.reduce((acc, sandwich) => {
      return acc += sandwich.totalCost
    }, 0);
    return totalCost;
  }
  
  todayTotalDebts() {
    let roomCost = this.todayRoomsCost();
    let roomServiceCost = this.todayRoomServiceCost();
    let totalDebts = roomCost + roomServiceCost;
    return Number(totalDebts.toFixed(2));
  }

  occupiedPercentage() {
    let availableRooms = this.todayTotalRoomsAvailable();
    let roomsBooked = this.rooms.length - availableRooms
    return (roomsBooked / this.rooms.length)*100
  }

}

export default Hotel;