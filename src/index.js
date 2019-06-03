import $ from 'jquery';
import { customers, rooms, bookings, roomServices } from '../test/sample-data.js';

import './css/base.scss';
import Hotel from './Hotel.js';
import Customer from './Customer.js'

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
        customer = new Customer(customerData, searchedCustomer)
        customer.grabCustomerInformation();
      }, 500)
    })

    setTimeout(() => {
      hotel = new Hotel(customerData, roomData, bookingData, roomServiceData, date.innerHTML);
      customer
      hotel.onLoad();
    }, 1000)
  })
