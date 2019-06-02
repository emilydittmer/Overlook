const customers = [
  {
    id: 1,
    name: "Autumn Toy"
  },
  {
    id: 2,
    name: "Jannie VonRueden"
  },
  {
    id: 3,
    name: "Anya Upton"
  },
  {
    id: 4,
    name: "Milo Ankunding"
  },
  {
    id: 5,
    name: "Reginald Schaden"
  },
  {
    id: 6,
    name: "Sedrick Bayer"
  },
  {
    id: 7,
    name: "Kathryn Medhurst"
  },
  {
    id: 8,
    name: "Meredith Jenkins"
  },
  {
    id: 9,
    name: "Florine Jaskolski"
  },
  {
    id: 10,
    name: "Kiel O'Reilly"
  },
  {
    id: 11,
    name: "Jake Jenkins"
  },
  {
    id: 12,
    name: "Maynard Langworth"
  },
  {
    id: 13,
    name: "Lorenz Dare"
  },
  {
    id: 14,
    name: "Lura Kshlerin"
  },
  {
    id: 15,
    name: "Sigurd Hoppe"
  },
  {
    id: 16,
    name: "Julie Reilly"
  },
  {
    id: 17,
    name: "Kianna Walter"
  },
  {
    id: 18,
    name: "Meggie Rice"
  },
  {
    id: 19,
    name: "Muriel McGlynn"
  },
  {
    id: 20,
    name: "Kelley VonRueden"
  }
]

const rooms = [
  {
    number: 1,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 344.58
  },
  {
    number: 2,
    roomType: "single room",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 462.7
  },
  {
    number: 3,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 344.89
  },
  {
    number: 4,
    roomType: "junior suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 192.48
  },
  {
    number: 5,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 269.65
  },
  {
    number: 6,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 426.45
  },
  {
    number: 7,
    roomType: "residential suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 441.66
  },
  {
    number: 8,
    roomType: "single room",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 254.9
  },
  {
    number: 9,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 405.85
  },
  {
    number: 10,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 275.32
  },
  {
    number: 11,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 493.85
  },
  {
    number: 12,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 176.99
  },
  {
    number: 13,
    roomType: "residential suite",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 417.08
  },
  {
    number: 14,
    roomType: "single room",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 217.17
  },
  {
    number: 15,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 159.65
  },
  {
    number: 16,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 239.54
  },
  {
    number: 17,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 259.06
  },
  {
    number: 18,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 444.27
  },
  {
    number: 19,
    roomType: "junior suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 229.67
  },
  {
    number: 20,
    roomType: "junior suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 200.67
  }
];

const bookings = [
  {
    userID: 1,
    date: "21/08/2019",
    roomNumber: 1
  },
  {
    userID: 2,
    date: "22/08/2019",
    roomNumber: 2
  },
  {
    userID: 3,
    date: "22/08/2019",
    roomNumber: 3
  },
  {
    userID: 4,
    date: "23/08/2019",
    roomNumber: 4
  },
  {
    userID: 5,
    date: "23/08/2019",
    roomNumber: 5
  },
  {
    userID: 6,
    date: "24/08/2019",
    roomNumber: 6
  },
  {
    userID: 7,
    date: "24/08/2019",
    roomNumber: 7
  },
  {
    userID: 8,
    date: "25/08/2019",
    roomNumber: 8
  },
  {
    userID: 9,
    date: "25/08/2019",
    roomNumber: 9
  },
  {
    userID: 10,
    date: "26/08/2019",
    roomNumber: 10
  },
  {
    userID: 11,
    date: "27/08/2019",
    roomNumber: 11
  },
  {
    userID: 12,
    date: "27/08/2019",
    roomNumber: 12
  },
  {
    userID: 13,
    date: "28/09/2019",
    roomNumber: 13
  },
  {
    userID: 14,
    date: "27/08/2019",
    roomNumber: 14
  },
  {
    userID: 15,
    date: "24/08/2019",
    roomNumber: 15
  },
  {
    userID: 16,
    date: "25/08/2019",
    roomNumber: 16
  },
  {
    userID: 17,
    date: "25/08/2019",
    roomNumber: 17
  },
  {
    userID: 18,
    date: "26/08/2019",
    roomNumber: 18
  },
  {
    userID: 19,
    date: "21/08/2019",
    roomNumber: 19
  },
  {
    userID: 20,
    date: "21/08/2019",
    roomNumber: 20
  }
];

const roomServices = [
  {
    userID: 1,
    date: "21/08/2019",
    food: "Generic Plastic Sandwich",
    totalCost: 9.48
  },
  {
    userID: 2,
    date: "22/08/2019",
    food: "Generic Soft Sandwich",
    totalCost: 24.24
  },
  {
    userID: 3,
    date: "22/08/2019",
    food: "Tasty Fresh Sandwich",
    totalCost: 13.07
  },
  {
    userID: 4,
    date: "23/08/2019",
    food: "Rustic Soft Sandwich",
    totalCost: 18.63
  },
  {
    userID: 5,
    date: "23/08/2019",
    food: "Sleek Concrete Sandwich",
    totalCost: 15.97
  },
  {
    userID: 6,
    date: "24/08/2019",
    food: "Rustic Wooden Sandwich",
    totalCost: 5.86
  },
  {
    userID: 7,
    date: "24/08/2019",
    food: "Intelligent Metal Sandwich",
    totalCost: 7.57
  },
  {
    userID: 8,
    date: "25/08/2019",
    food: "Sleek Metal Sandwich",
    totalCost: 9.38
  },
  {
    userID: 9,
    date: "25/08/2019",
    food: "Tasty Granite Sandwich",
    totalCost: 5.7
  },
  {
    userID: 10,
    date: "26/08/2019",
    food: "Ergonomic Fresh Sandwich",
    totalCost: 19.16
  },
  {
    userID: 11,
    date: "27/08/2019",
    food: "Intelligent Frozen Sandwich",
    totalCost: 21.6
  },
  {
    userID: 12,
    date: "27/08/2019",
    food: "Intelligent Metal Sandwich",
    totalCost: 23.02
  },
  {
    userID: 13,
    date: "28/09/2019",
    food: "Handmade Frozen Sandwich",
    totalCost: 22.69
  },
  {
    userID: 14,
    date: "27/08/2019",
    food: "Handmade Steel Sandwich",
    totalCost: 11.16
  },
  {
    userID: 15,
    date: "24/08/2019",
    food: "Unbranded Plastic Sandwich",
    totalCost: 9.6
  },
  {
    userID: 16,
    date: "25/08/2019",
    food: "Unbranded Wooden Sandwich",
    totalCost: 8.7
  },
  {
    userID: 17,
    date: "25/08/2019",
    food: "Handmade Cotton Sandwich",
    totalCost: 17.39
  },
  {
    userID: 18,
    date: "26/08/2019",
    food: "Refined Granite Sandwich",
    totalCost: 8.19
  },
  {
    userID: 19,
    date: "21/08/2019",
    food: "Incredible Fresh Sandwich",
    totalCost: 8.2
  },
  {
    userID: 20,
    date: "21/08/2019",
    food: "Rustic Frozen Sandwich",
    totalCost: 17.26
  }
];

export { customers, rooms, bookings, roomServices };