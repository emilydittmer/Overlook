import $ from 'jquery';

import './css/base.scss';
import Hotel from './Hotel.js';

var customerData;
var roomData;
var roomServiceData;
var bookingData;
let hotel;

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  .then(function(response) {
    response.json().then(function(customers) {
      setCustomerData(customers.users);
    })
  })
  .catch(err => console.log('Error'));

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
  .then(function(response) {
    response.json().then(function(rooms) {
      setRoomData(rooms.rooms);
    })
  })
  .catch(err => console.log('Error'));

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
  .then(function(response) {
    response.json().then(function(bookings) {
      setBookingData(bookings.bookings);
    })
  })
  .catch(err => console.log('Error'));

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
  .then(function(response) {
    response.json().then(function(roomService) {
      setRoomServiceData(roomService.roomServices);
    })
  })
  .catch(err => console.log('Error'));

  function setCustomerData(customers) {
    customerData = customers;
  }

  function setRoomData(rooms){
    roomData = rooms;
  }

  function setRoomServiceData(roomService){
    roomServiceData = roomService;
  }

  function setBookingData(booking){
    bookingData = booking;
  }

  let newDate = new Date();
  var month = newDate .getMonth() + 1;
  var day = newDate .getDate();
  var year = newDate .getFullYear();

  let date = document.querySelector("#date");

date.innerHTML =  month + "/" + day + "/" + year;

  $(document).ready(function(){
	
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
    
    hotel = new Hotel(customerData, roomData, bookingData, roomServiceData, date);
    hotel.todayTotalRoomsAvailable();
  })