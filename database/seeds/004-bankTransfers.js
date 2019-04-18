
exports.seed = function(knex, Promise) {
  return knex('bankTransfers').insert([
    {
      username: "swUsername1",
      balanceInquiry: 14.02,
      sw_id: 1
    },
    {
      username: "swUsername1",
      balanceInquiry: 24.12,
      sw_id: 1
    },
    {
      username: "swUsername1",
      balanceInquiry: 9.01,
      sw_id: 1
    },
    {
      username: "singerguy57",
      balanceInquiry: 29.11,
      sw_id: 3
    },
    {
      username: "singerguy57",
      balanceInquiry: 19.95,
      sw_id: 3
    },
    {
      username: "TimmyTubo",
      balanceInquiry: 19.95,
      sw_id: 4
    },
    {
      username: "TimmyTubo",
      balanceInquiry: 14.45,
      sw_id: 4
    },
    {
      username: "TimmyTubo",
      balanceInquiry: 12.13,
      sw_id: 4
    },
    {
      username: "Geoffry12321",
      balanceInquiry: 83.28,
      sw_id: 5
    },
    {
      username: "Geoffry12321",
      balanceInquiry: 48.92,
      sw_id: 5
    },
  ]);
};
