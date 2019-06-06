import domUpdates from './domUpdates';

class Booking {
  constructor(bookingData, selectedCustomer, date){
    this.bookingData = bookingData;
    this.selectedCustomer = selectedCustomer;
    this.date = date;
  }

  mostPopularBookingDate() {
    let bookingDays = this.bookingData.reduce((acc, res)=> {
      if(!acc[res.date]){
        acc[res.date] = 1;
      }
      acc[res.date]++;
      return acc;
    }, {})
    this.highestAvailableDay(bookingDays);
    let highestDateCount = 0;
    let mostPopularDate = '';
    Object.keys(bookingDays).forEach(key => {
      if (bookingDays[key] > highestDateCount) {
        highestDateCount = bookingDays[key];
        mostPopularDate = key;
      }
    })
    domUpdates.showMostPopularDate(mostPopularDate);
    return mostPopularDate;
  }

  highestAvailableDay(bookingDays) {
    let lowestDateCount = Object.values(bookingDays)[0];
    let leastPopularDate = '';
    Object.keys(bookingDays).forEach(key => {
      if (bookingDays[key] < lowestDateCount) {
        lowestDateCount = bookingDays[key];
        leastPopularDate = key;
      } else {
        leastPopularDate = key
      }
    })
    domUpdates.showLeastPopularDate(leastPopularDate);
    return leastPopularDate
  }

}

export default Booking;