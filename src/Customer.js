import domUpdates from './domUpdates';

class Customer {
  constructor(customerData, roomData, roomServiceData, bookingData, searchValue, date) {
    this.customerData = customerData;
    this.roomData = roomData;
    this.roomServiceData = roomServiceData;
    this.bookingData = bookingData;
    this.searchValue = searchValue;
    this.date = date;
    this.foundCustomer = [];
    this.selectedCustomer = '';
    this.selectedCustomerID = ''
  }

  grabCustomerInformation() {
    let allCustomers = this.customerData.map(customer => customer.name);
    let customer = allCustomers.filter(customer => customer.toUpperCase().includes(this.searchValue))
    this.foundCustomer = customer;
    if (this.foundCustomer.length === 1) {
      this.selectedCustomer = customer;
    }
    domUpdates.displayCustomer(this.foundCustomer);
    this.totalCustomerOwed();
  }

  totalCustomerOwed() {
    let customer = this.customerData.find(customer => customer.name == this.selectedCustomer)
    this.selectedCustomerID = customer.id;
    let booking = this.bookingData.find(room => room.userID == this.selectedCustomerID);
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

  updateRoomService() {
    let roomService = new roomService(this.roomService, this.customerData, this.selectedCustomer, this.selectedCustomerID, this.date)
  }

}

export default Customer;