import domUpdates from './domUpdates';
import RoomService from './RoomService';

class Customer {
  constructor(customerData, roomData, roomServiceData, bookingData, searchValue, date) {
    this.customerData = customerData;
    this.roomData = roomData;
    this.roomServiceData = roomServiceData;
    this.bookingData = bookingData;
    this.searchValue = searchValue;
    this.date = date;
    this.selectedCustomer = {};
  }

  grabCustomerInformation() {
    let allCustomers = this.customerData.find(customer => customer.name.toUpperCase().includes(this.searchValue))
    this.selectedCustomer = allCustomers;
    domUpdates.displayCustomer(this.selectedCustomer.name);
    this.totalCustomerOwed();
    let roomService = new RoomService(this.roomServiceData, this.customerData, this.selectedCustomer, this.date)
    roomService.showOrdersByDate();
    domUpdates.showCustomerNameRoomService(this.selectedCustomer.name)
    domUpdates.showSelectedDateRoomService(this.date);
  }

  totalCustomerOwed() {
    let booking = this.bookingData.find(room => room.userID == this.selectedCustomer.id);
    let roomNumber = booking.roomNumber;
    let hotelRoom = this.roomData.find(room => room.number === roomNumber);
    let totalRoomCost = hotelRoom.costPerNight
    let allSandwiches = this.roomServiceData.filter(sandwich => sandwich.userID == Number(this.selectedCustomerID))
    let totalSandwichCost = allSandwiches.reduce((acc, sandwich) => {
      return acc += sandwich.totalCost
    }, 0)
    let totalCost = totalRoomCost + totalSandwichCost
    domUpdates.displayCustomerTotalCost(totalCost);
    return totalCost
  }

}

export default Customer;