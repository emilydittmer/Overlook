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

  showSelectedCustomerTodayOrders(orders) {
    if(orders.length > 0){
      $('.customer-orders-today').html(orders)
    } else {
      $('.customer-orders-today').html("No Orders Today")
    }
  },

  showSelectedCustomerTodayCost(amount) {
    $('.customer-cost-today').html(amount)
  }
}

export default domUpdates;