import $ from 'jquery';

import './css/base.scss';
import Hotel from './Hotel.js';
import Customer from './Customer.js'
import domUpdates from './domUpdates.js';

var customerData;
var roomData;
var roomServiceData;
var bookingData;
let hotel;
let customer;

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
  let date = document.querySelector("#date");
  date.innerHTML = [
    newDate.getDate(),
    "0" + (newDate.getMonth() + 1),
    newDate.getFullYear()
  ].join("/");

  $(document).ready(function(){
	
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })

    $('.customer-search').on('input', function(){
      let searchedCustomer = $('.customer-search').val().toUpperCase();
      setTimeout(() => {
        customer = new Customer(customerData, roomData, roomServiceData, bookingData, searchedCustomer, date.innerHTML)
        customer.grabCustomerInformation();
      }, 500)
    })

    setTimeout(() => {
      hotel = new Hotel(customerData, roomData, bookingData, roomServiceData, date.innerHTML);
      hotel.onLoad();
    }, 1000)
  })

  $('#add-new-customer').on('click', function() {
    let customerName = $('.add-customer').val();
    let newCustomerObj = {};
    newCustomerObj.name = customerName;
    newCustomerObj.id = customerData.length+1;
    customerData.push(newCustomerObj);
    domUpdates.displayCustomer(newCustomerObj.name);
    $('.add-customer').val('');
  })
