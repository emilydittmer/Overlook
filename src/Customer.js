import domUpdates from './domUpdates';

class Customer {
  constructor(customerData, searchValue) {
    this.customerData = customerData;
    this.searchValue = searchValue;
    this.foundCustomer = [];
    this.selectedCustomer = {};
  }

  grabCustomerInformation() {
    let allCustomers = this.customerData.map(customer => customer.name);
    let customer = allCustomers.filter(customer => customer.toUpperCase().includes(this.searchValue))
    this.foundCustomer = customer;
    domUpdates.displayCustomer(this.foundCustomer);
  }

  totalCustomerOwed() {

  }

}

export default Customer;