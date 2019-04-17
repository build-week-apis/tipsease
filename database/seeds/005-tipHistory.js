
exports.seed = function(knex, Promise) {
  return knex('tipHistory').insert([
    {
      swUsername: "swUsername1",
      senderUsername: "patty",
      dateRecieved: new Date(),
      tipAmount: 8.25,
      sw_id: 1
    },
    {
      swUsername: "swUsername1",
      senderUsername: "username1",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 1
    },
    {
      swUsername: "swUsername1",
      senderUsername: "FrankieH",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 1
    },
    {
      swUsername: "swUsername1",
      senderUsername: "username1",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 1
    },
    {
      swUsername: "swUsername1",
      senderUsername: "username1",
      dateRecieved: new Date(),
      tipAmount: 19.02,
      sw_id: 1
    },

    {
      swUsername: "swUsername2",
      senderUsername: "patty",
      dateRecieved: new Date(),
      tipAmount: 8.25,
      sw_id: 2
    },
    {
      swUsername: "swUsername2",
      senderUsername: "username1",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 2
    },
    {
      swUsername: "swUsername2",
      senderUsername: "FrankieH",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 2
    },
    {
      swUsername: "swUsername2",
      senderUsername: "username1",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 2
    },
    {
      swUsername: "swUsername2",
      senderUsername: "FrankieH",
      dateRecieved: new Date(),
      tipAmount: 19.02,
      sw_id: 2
    },

    {
      swUsername: "singerguy57",
      senderUsername: "patty",
      dateRecieved: new Date(),
      tipAmount: 8.25,
      sw_id: 3
    },
    {
      swUsername: "singerguy57",
      senderUsername: "username1",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 3
    },
    {
      swUsername: "singerguy57",
      senderUsername: "FrankieH",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 3
    },
    {
      swUsername: "singerguy57",
      senderUsername: "username1",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 3
    },
    {
      swUsername: "singerguy57",
      senderUsername: "FrankieH",
      dateRecieved: new Date(),
      tipAmount: 19.02,
      sw_id: 3
    },

    {
      swUsername: "TimmyTubo",
      senderUsername: "patty",
      dateRecieved: new Date(),
      tipAmount: 8.25,
      sw_id: 4
    },
    {
      swUsername: "TimmyTubo",
      senderUsername: "username1",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 4
    },
    {
      swUsername: "TimmyTubo",
      senderUsername: "FrankieH",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 4
    },
    {
      swUsername: "TimmyTubo",
      senderUsername: "username1",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 4
    },
    {
      swUsername: "TimmyTubo",
      senderUsername: "FrankieH",
      dateRecieved: new Date(),
      tipAmount: 19.02,
      sw_id: 4
    },

    {
      swUsername: "Geoffry12321",
      senderUsername: "patty",
      dateRecieved: new Date(),
      tipAmount: 8.25,
      sw_id: 5
    },
    {
      swUsername: "Geoffry12321",
      senderUsername: "username1",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 5
    },
    {
      swUsername: "Geoffry12321",
      senderUsername: "FrankieH",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 5
    },
    {
      swUsername: "Geoffry12321",
      senderUsername: "username1",
      dateRecieved: new Date(),
      tipAmount: 5,
      sw_id: 5
    },
    {
      swUsername: "Geoffry12321",
      senderUsername: "FrankieH",
      dateRecieved: new Date(),
      tipAmount: 19.02,
      sw_id: 5
    }
  ]);
};
