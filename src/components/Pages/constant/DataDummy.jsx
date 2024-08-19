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
