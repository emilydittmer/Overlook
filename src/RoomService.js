import domUpdates from './domUpdates';

class RoomService{
  constructor(roomServiceData, customerData, selectedCustomer, selectedCustomerID, date) {
    this.roomServiceData = roomServiceData;
    this.customerData = customerData;
    this.selectedCustomer = selectedCustomer;
    this.selectedCustomerID = selectedCustomerID;
    this.date = date;
  }

  showOrdersToday() {
    return this.roomServiceData.filter(roomService => roomService.date === this.date);
  }

  showOrderByDate(date) {
    return this.roomServiceData.filter(roomService => roomService.date === date);
  }

  showOrdersByCustomer() {
    let customerOrders = this.roomServiceData.filter(roomService => roomService.userID === Number(this.selectedCustomerID))
    this.showTotalBreakDownOfPurchases(customerOrders);
    return customerOrders;
  }

  showTotalBreakDownOfPurchases(allOrders) {
    let orders = allOrders.map(order => {
      return {
        date: order.date,
        food: order.food,
        cost: order.totalCost
      }
    })
    return orders;
  }

  showTotalSpentPerDay(date) {
    let customerOrders = this.roomServiceData.filter(order => order.userID === Number(this.selectedCustomerID))
    let ordersPerDay = customerOrders.filter(order => order.date === date)
    return ordersPerDay.reduce((acc, order) => {
      return acc += order.totalCost
    }, 0)
  }

  showTotalSpentByCustomer() {
    let customerOrders = this.roomServiceData.filter(order => order.userID === Number(this.selectedCustomerID))
    return customerOrders.reduce((acc, order) => {
      return acc += order.totalCost
    }, 0)
  }



}

export default RoomService;