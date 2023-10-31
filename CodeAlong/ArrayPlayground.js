// 10.31.23

// let foodGroups = [
//   // Simplistic
//   "Grains",
//   "Meat",
//   "Vegetables",
//   "Fruits",
//   "Dairy",
// ];

// let foodGroups2 = [
//   // Complex
//   {
//     Food: "Apple",
//     Group: "Fruit",
//     Description: "Sweet red fruit",
//     Expiration: "10-31-2023",
//     Specifications: {
//       Origin: [
//         {
//           Location: "Sunny farms",
//           Size: "medium",
//           Address: "1111 Sunny Farms",
//           State: "Georgia",
//           Country: "USA",
//         },
//       ],
//       Store: [
//         {
//           Truck: 9109,
//           Store: "Publix",
//           Address: "12222 Somewhere",
//           State: "Florida",
//           Country: "USA",
//         },
//       ],
//     },
//   },
//   {
//     Food: "Egg",
//     Group: "Meat",
//     Description: "Comes from a chicken!",
//     Expiration: "11-04-2023",
//     Specifications: {
//         Origin: [
//           {
//             Location: "Chicken farms",
//             Size: "large",
//             Address: "2222 Chicken Farms",
//             State: "Nebraska",
//             Country: "USA",
//           },
//         ],
//         Store: [
//           {
//             Truck: 91210,
//             Store: "Walmart",
//             Address: "12222 Somewhere",
//             State: "Florida",
//             Country: "USA",
//           },
//         ],
//       },
//   },
//   {
//     Food: "Yogurt",
//     Group: "Dairy",
//     Description: "Healthy probiotics, protein life hack!",
//     Expiration: "11-14-2023",
//     Specifications: {
//         Origin: [
//           {
//             Brand: "Chobani",
//             Flavor: "Cookie Dough",
//             Address: "11245 Chobani Land",
//             State: "Heaven",
//             Country: "USA",
//           },
//         ],
//         Store: [
//           {
//             Truck: 24601,
//             Store: "Winn-Dixie",
//             Address: "4444 Florida Man Land",
//             State: "Florida",
//             Country: "USA",
//           },
//         ],
//       },


// },
// ];

const products = [
    {
      id: 1,
      title: "Vintage Ceramic Mug",
      description: "A beautiful vintage ceramic mug from the 1980s. Perfect for your morning coffee.",
      details: {
        dimensions: {
          height: "4 inches",
          diameter: "3 inches",
        },
        weight: "300 grams",
        material: "Ceramic",
        origin: "Italy",
        brand: "AntiqueMugs Inc.",
        manufacturingDate: "1985-05-12",
      },
      seller: {
        id: 101,
        name: "Alice",
        rating: 4.8,
        reviews: 320,
        location: {
          city: "Los Angeles",
          state: "CA",
          country: "USA",
          postalCode: "90001",
        },
      },
      price: {
        amount: 14.99,
        currency: "USD",
        discount: {
          percentage: 10,
          endDate: "2023-11-01",
        },
      },
      images: [
        {
          url: "https://example.com/images/vintage_mug_1.jpg",
          isPrimary: true,
          description: "Front view of the mug",
        },
        {
          url: "https://example.com/images/vintage_mug_2.jpg",
          isPrimary: false,
          description: "Bottom stamp of the mug",
        },
      ],
      category: {
        primary: "Home & Kitchen",
        subcategories: ["Kitchenware", "Mugs"],
      },
      condition: "Used",
      bids: [
        {
          userId: 201,
          amount: 12.99,
          time: "2023-10-29 14:32:00",
        },
        {
          userId: 202,
          amount: 13.99,
          time: "2023-10-30 09:15:10",
        },
      ],
      shipping: {
        methods: [
          {
            type: "Standard",
            cost: 5.00,
            estimatedDelivery: "2023-11-10",
          },
          {
            type: "Express",
            cost: 15.00,
            estimatedDelivery: "2023-11-05",
          },
        ],
        returns: {
          accepted: true,
          policy: "Return within 14 days of delivery.",
        },
      },
      location: "Los Angeles, CA",
      quantityAvailable: 1,
      datePosted: "2023-10-25",
      tags: ["vintage", "ceramic", "1980s", "coffee"],
      reviews: [
        {
          userId: 303,
          rating: 5,
          comment: "Love this mug! It's just like the one my grandma had.",
          date: "2023-10-28",
        },
        {
          userId: 304,
          rating: 4,
          comment: "Good quality, but it's a bit smaller than I expected.",
          date: "2023-10-27",
        },
      ],
    },
    // ... more products ...
  ];