import domUpdates from './domUpdates';

class RoomService{
  constructor(roomServiceData, customerData, selectedCustomer, date) {
    this.roomServiceData = roomServiceData;
    this.customerData = customerData;
    this.selectedCustomer = selectedCustomer;
    this.date = date;
  }

  showOrdersToday() {
    let todayOrders = this.roomServiceData.filter(roomService => roomService.date === this.date);
    domUpdates.showSelectedCustomerTodayOrders(todayOrders);
    this.showOrderByDate();
    this.showTotalSpentByCustomer();
    return todayOrders;
  }

  showOrderByDate() {
    let ordersOnDate = this.roomServiceData.filter(roomService => roomService.date === this.date);
    ///domUpdate(ordersOnDate)
    this.showOrdersByCustomer();
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
    this.roomServicePerDay(orders);
    return orders;
  }

  showTotalSpentPerDay(date) {
    let customerOrders = this.roomServiceData.filter(order => order.userID === this.selectedCustomer.id)
    let ordersPerDay = customerOrders.filter(order => order.date === date)
    let total = ordersPerDay.reduce((acc, order) => {
      return acc += order.totalCost
    }, 0)
    domUpdates.showSelectedCustomerTodayCost(total);
    return total;
  }

  showTotalSpentByCustomer() {
    let customerOrders = this.roomServiceData.filter(order => order.userID === this.selectedCustomer.id)
    return customerOrders.reduce((acc, order) => {
      return acc += order.totalCost
    }, 0)
  }

  roomServicePerDay(orders) {
    let eachDayOrder = orders.reduce((acc, food) => {
      if(!acc[food.date]) {
        date: acc[food.date] = [];
      }
      acc[food.date].push({food: food.food, cost: food.cost})
      return acc;
    }, [])
    return eachDayOrder;
  }

}

export default RoomService;