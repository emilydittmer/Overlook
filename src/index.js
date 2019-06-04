import $ from 'jquery';

import './css/base.scss';
import Hotel from './Hotel.js';
import Customer from './Customer.js'
import domUpdates from './domUpdates.js';
import fetchData from '../utl/fetchData';
import RoomService from './RoomService';


var customerData;
var roomData;
var roomServiceData;
var bookingData;
let hotel;
let customer;
let roomService;

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
        roomService = new RoomService(roomServiceData, customerData, date.innerHTML)
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

  $('.roomservice-search-button').on('click', function(e) {
    e.preventDefault();
    let newCustomer = $('.roomservice-customer-search').val().toUpperCase();
    let selectedCustomer = customerData.find(customer => customer.name.toUpperCase() === newCustomer)
    let newDate = $('.roomservice-date-selection').val();
    let reformatDate = newDate.toString().split('-')
    let changedDate = `${reformatDate[2]}/${reformatDate[1]}/${reformatDate[0]}`
    let roomService = new RoomService(roomServiceData, customerData, selectedCustomer, changedDate);
    domUpdates.showCustomerNameRoomService(selectedCustomer.name);
    roomService.showOrdersToday()
  })

