import domUpdates from './domUpdates';

class RoomService{
  constructor(roomServiceData, customerData, selectedCustomer, date) {
    this.roomServiceData = roomServiceData;
    this.customerData = customerData;
    this.selectedCustomer = selectedCustomer;
    this.date = date;
  }

  showOrdersByDate() {
    console.log(this.date)
    let todayOrders = this.roomServiceData.filter(roomService => roomService.date === this.date);
    this.showOrdersByDatePerCustomer(todayOrders);
    this.showAllOrdersByCustomer();
    domUpdates.showAllOrdersPerDate(todayOrders)
    return todayOrders;
  }

  showOrdersByDatePerCustomer(todayOrders) {
    let todayCustomerOrders = todayOrders.filter(order => order.userID === this.selectedCustomer.id);
    domUpdates.showSelectedCustomerTodayOrders(todayCustomerOrders)
    return todayCustomerOrders;
  }

  showAllOrdersByCustomer() {
    let customerOrders = this.roomServiceData.filter(roomService => roomService.userID === this.selectedCustomer.id)
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
    this.roomServicePerDay(orders);
    this.showTotalSpentPerDay();
    domUpdates.showCustomerRoomServiceByDate(orders);
    return orders;
  }

  showTotalSpentPerDay() {
    let customerOrders = this.roomServiceData.filter(order => order.userID === this.selectedCustomer.id)
    let ordersPerDay = customerOrders.filter(order => order.date === this.date)
    let total = ordersPerDay.reduce((acc, order) => {
      return acc += order.totalCost
    }, 0)
    domUpdates.showSelectedCustomerTodayCost(total);
    this.showTotalSpentByCustomer();
    return total;
  }

  showTotalSpentByCustomer() {
    let customerOrders = this.roomServiceData.filter(order => order.userID === this.selectedCustomer.id)
    let totalCost = customerOrders.reduce((acc, order) => {
      return acc += order.totalCost
    }, 0)
    domUpdates.showCustomerTotalCost(totalCost);
    return totalCost;
  }

  roomServicePerDay(allOrders) {
    let eachDayOrder = allOrders.reduce((acc, food) => {
      if(!acc[food.date]) {
        acc[food.date] = [];
      }
      acc[food.date].push({food: food.food, cost: food.cost})
      return acc;
    }, [])
    return eachDayOrder;
  }

  addNewOrder(updateRoomServiceData, customer, selectedDate) {
    this.roomServiceData = updateRoomServiceData;
    this.selectedCustomer = customer;
    this.date = selectedDate;
    this.showOrdersByDate()
  }

  updateDate(customer, newDate) {
    this.selectedCustomer = customer;
    this.date = newDate;
    this.showOrdersByDate()
  }

}

export default RoomService;