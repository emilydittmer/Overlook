import $ from 'jquery';
import Hotel from './Hotel';

let domUpdates = {

  todayTotalAvailaleRooms(rooms) {
    $('.main-total-rooms').html(rooms);
  },

  totalDailyDebt(total) {
    $('.main-total-debt').html(total)
  },

  dailyOccupiedPercentage(percentage) {
    $('.main-occupacy-percentage').html(percentage)
  },

  displayCustomer(customer) {
    if (customer.length === 0) {
      $('.found-customer').html("No Customer Found")
    }else {
      $('.found-customer').html(customer)
    }
  },

  displayCustomerTotalCost(total){
    $('.customer-total-owed').html(total)
  },

  showCustomerNameRoomService(customer) {
    $('.customer-name').html(customer);
  },

  showSelectedDateRoomService(date) {
    $('.selected-date').html(date);
  },

  showSelectedCustomerTodayOrders(orders) {
    if(orders.length > 0){
      orders.forEach(order => {
        $('.customer-orders-today').html(`${order.food} ( ${order.totalCost} )`)
      })
    } else {
      $('.customer-orders-today').html("No Orders Today")
    }
  },

  showSelectedCustomerTodayCost(amount) {
    $('.customer-cost-today').html(amount)
  },

  showAllOrdersPerDate(allOrders) {
    $('.all-orders-by-date').html(allOrders)
  },

  showCustomerRoomServiceByDate(allOrders){
    if(allOrders.length === 0){
      $('.all-room-service-by-day').html("No Orders for selected customer")
    } else {
      allOrders.forEach(order => {
        $('.all-room-service-by-day').html(`${order.date}: ${order.food}( ${order.cost} )`)
      })
    }
  },

  showCustomerTotalCost(total) {
    $('.customer-total-cost').html(total)
  },

  showMostPopularDate(date) {
    $('.most-popular-date').html(date);
  },

  showLeastPopularDate(date) {
    $('.least-popular-date').html(date);
  }
}

export default domUpdates;