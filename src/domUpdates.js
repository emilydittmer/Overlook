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
  }
}

export default domUpdates;