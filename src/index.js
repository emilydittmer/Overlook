import $ from 'jquery';

import './css/base.scss';
import Hotel from './Hotel.js';
import Customer from './Customer.js'
import domUpdates from './domUpdates.js';
import fetchData from '../utl/fetchData';
import RoomService from './RoomService';
import Booking from './Bookings';


var customerData;
var roomData;
var roomServiceData;
var bookingData;
let hotel;
let customer;
let roomService;
let currentCustomer;

  const assignData = async () => {
    roomData = await fetchData('rooms');
    customerData = await fetchData('users');
    roomServiceData = await fetchData('roomServices');
    bookingData = await fetchData('bookings');
  }

  assignData();

  let newDate = new Date();
  let date = document.querySelector("#date");
  date.innerHTML = [
   "0" + (newDate.getDate()),
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
        roomService = new RoomService(roomServiceData, customerData, date.innerHTML);
      }, 500)
    })

    setTimeout(() => {
      hotel = new Hotel(customerData, roomData, bookingData, roomServiceData, date.innerHTML);
      hotel.onLoad();
      // booking = 
    }, 1000)
  })

  $('#add-new-customer').on('click', function() {
    let customerName = $('.add-customer').val();
    $('.add-customer').val('');
    let newCustomerObj = {};
    newCustomerObj.name = customerName;
    newCustomerObj.id = customerData.length+1;
    customerData.push(newCustomerObj);
    domUpdates.displayCustomer(newCustomerObj.name);
    $('.add-customer').val('');
  })

  $('.roomservice-search-button').on('click', function(e) {
    e.preventDefault();
    let newCustomer = $('.roomservice-customer-search').val().toUpperCase();
    $('.roomservice-customer-search').val('');
    let selectedCustomer = customerData.find(customer => customer.name.toUpperCase() === newCustomer)
    console.log(selectedCustomer)
    let newDate = $('.roomservice-date-selection').val();
    $('.roomservice-date-selection').val('');
    let reformatDate = newDate.toString().split('-')
    let changedDate = `${reformatDate[2]}/${reformatDate[1]}/${reformatDate[0]}`
    roomService = new RoomService(roomServiceData, customerData, selectedCustomer, changedDate);
    domUpdates.showCustomerNameRoomService(selectedCustomer.name);
    domUpdates.showSelectedDateRoomService(changedDate)
    roomService.showOrdersByDate();
  })

  $('.add-room-service-btn').on('click', function(e) {
    e.preventDefault();
    let newRoomServiceOrder = {};
    let customer = {};
    let selectedCustomer = $('.customer-name').html();
    let selectedCustomerID = customerData.find(customer => customer.name === selectedCustomer).id
    let selectedDate = $('.selected-date').html()
    newRoomServiceOrder.userID = selectedCustomerID;
    newRoomServiceOrder.date = selectedDate;
    newRoomServiceOrder.food = $('.room-service-food-input').val();
    $('.room-service-food-input').val('');
    newRoomServiceOrder.totalCost = Number($('.room-service-food-cost').val());
    $('.room-service-food-cost').val('');
    customer.id = customerData.find(customer => customer.name === selectedCustomer).id
    customer.name = selectedCustomer;
    roomServiceData.push(newRoomServiceOrder);
    roomService.addNewOrder(roomServiceData, customer, selectedDate);
  })

  $('.roomservice-select-new-date-btn').on('click', function(e){
    e.preventDefault();
    let customer = {};
    let selectedCustomer = $('.customer-name').html();
    let selectedCustomerID = customerData.find(customer => customer.name === selectedCustomer).id;
    customer.id = customerData.find(customer => customer.name === selectedCustomer).id
    customer.name = selectedCustomer;
    let newDate = $('.roomservice-new-date-selection').val();
    $('.roomservice-date-selection').val('');
    let reformatDate = newDate.toString().split('-')
    let changedDate = `${reformatDate[2]}/${reformatDate[1]}/${reformatDate[0]}`
    domUpdates.showSelectedDateRoomService(changedDate);
    roomService.updateDate(customer, changedDate);
  })

  $('.add-new-booking-btn').on('click', function(e){
    e.preventDefault();
    console.log(customer.selectedCustomer)
    let selectedDate = $('.new-booking-date').val()
    $('.roomservice-date-selection').val('');
    let reformatDate = selectedDate.toString().split('-')
    let changedDate = `${reformatDate[2]}/${reformatDate[1]}/${reformatDate[0]}`
    let selectedRoomType = $('input[name="room-type"]:checked').val();
    let selectedBedSize = $('input[name="bed-size"]:checked').val();
    let selectedBedNums = $('input[name="num-beds"]:checked').val();
    let selectedBidet = $('input[name="bidet"]:checked').val();
    checkForRooms(changedDate, selectedRoomType, selectedBedSize, selectedBedNums, selectedBidet)
  })


  function checkForRooms(date, roomType, bedSize, bedNum, bidet) {
    let typeOfRoom = roomData.filter(room => room.roomType === roomType)
    let sizeOfBed = typeOfRoom.filter(room => room.bedSize === bedSize);
    let numOfBeds = sizeOfBed.filter(room => room.numBeds == bedNum)
    let filteredRooms = numOfBeds.filter(room => room.bidet.toString() === bidet)
    let booking = filteredRooms.filter(room => !bookingData.filter(booking => booking.date === date).map(booking => booking.roomNumber).includes(room.number))
    if(booking.length) {
      domUpdates.showCompletedBooking('Room has been booked successfully');
    } else {
      domUpdates.showCompletedBooking('No available bookings for this date. Please select different options.')
    }
    
  }


