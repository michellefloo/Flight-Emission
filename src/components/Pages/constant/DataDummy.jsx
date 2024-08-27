export const metricDummyData = {
  summary: {
    from: {
      country: "Indonesia",
      code: "CGK",
      countryCode: "ID",
    },
    to: {
      country: "Japan",
      code: "HND",
      countryCode: "JP",
    },
  },
  passengers: {
    total: 1,
    fuelBurn: "428 KG",
    co2: "45,175 KG",
  },
  cabin: {
    class: "Economy",
    trip: "One way",
  },
  offset: {
    co2: "45,175 KG",
    mangroves: "2,259",
    cost: "Rp 45,175,000",
  },
  flightStages: [
    {
      from: {
        code: "CGK",
        countryCode: "ID",
      },
      to: {
        code: "SIN",
        countryCode: "SG",
      },
      distance: "880 KM",
      aircraft: "320, 32A, 32N, 333, 339, 359, 738, 773, 77W",
      fuelBurn: "6,387 KG",
      co2: "82 KG",
    },
    {
      from: {
        code: "SIN",
        countryCode: "SG",
      },
      to: {
        code: "HND",
        countryCode: "JP",
      },
      distance: "5,296 KM",
      aircraft: "359, 767, 773, 77W, 788, 789",
      fuelBurn: "38,788 KG",
      co2: "346 KG",
    },
  ],
};

export const standardDummyData = {
  summary: {
    from: {
      country: "Indonesia",
      code: "CGK",
      countryCode: "ID",
    },
    to: {
      country: "Japan",
      code: "HND",
      countryCode: "JP",
    },
  },
  passengers: {
    total: 1,
    fuelBurn: "943 LBS",
    co2: "99,594 lbs",
  },
  cabin: {
    class: "Economy",
    trip: "One way",
  },
  offset: {
    co2: "99,594 lbs",
    mangroves: "2,259",
    cost: "Rp 45,175,000",
  },
  flightStages: [
    {
      from: {
        code: "CGK",
        countryCode: "ID",
      },
      to: {
        code: "SIN",
        countryCode: "SG",
      },
      distance: "547 MI",
      aircraft: "320, 32A, 32N, 333, 339, 359, 738, 773, 77W",
      fuelBurn: "14,080 lbs",
      co2: "181 LBS",
    },
    {
      from: {
        code: "SIN",
        countryCode: "SG",
      },
      to: {
        code: "HND",
        countryCode: "JP",
      },
      distance: "3,291 MI",
      aircraft: "359, 767, 773, 77W, 788, 789",
      fuelBurn: "85,514 lbs",
      co2: "762 LBS",
    },
  ],
};

export const offsetPageDummyData = {
  reportInfo:
    "Planting 50 Mangrove trees can help you absorb up to 1,650 kg of CO2e from the atmosphere.",
  description: `Aviation is a significant source of carbon dioxide (CO2) emissions, contributing substantially to climate change. Every time an aircraft
            flies, jet fuel is burned, resulting in greenhouse gas emissions
            that pollute the atmosphere. The carbon emissions from flights are
            calculated based on factors such as the flight distance, type of
            aircraft, number of passengers, and fuel consumption.`,
  product: {
    mangroveesQuantity: "50",
    co2: "1,650 kg CO2e",
    quantity: "2,259",
    price: "45,175,000",
    images: [
      {
        desc: "Mangrove tree variant 1",
        link: "assets/img/mangrove-varian.png",
      },
      {
        desc: "Mangrove tree variant 2",
        link: "assets/img/mangrove-varian.png",
      },
      {
        desc: "Mangrove tree variant 3",
        link: "assets/img/mangrove-varian.png",
      },
      {
        desc: "Mangrove tree variant 4",
        link: "assets/img/mangrove-varian.png",
      },
    ],
  },
};