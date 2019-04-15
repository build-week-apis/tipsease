
const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return knex('serviceWorkers').insert([
    {
      username: "swUsername1",
      fullName: "Bleh Bluh",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/54379012_10156226514467944_5087497768381972480_n.jpg?_nc_cat=110&_nc_ht=scontent.ftpa1-1.fna&oh=ad3fca79eb090f5916b49b53374bd879&oe=5D15C8EB",
      serviceType: "bellhop",
      timeAtJob: "2 years",
      tagline: "A helping hand :)",
      accountBalance: 150.50,
      rating: 4.20
    },
    {
      username: "swUsername2",
      fullName: "Jane Doe",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/54379012_10156226514467944_5087497768381972480_n.jpg?_nc_cat=110&_nc_ht=scontent.ftpa1-1.fna&oh=ad3fca79eb090f5916b49b53374bd879&oe=5D15C8EB",
      serviceType: "Waitress",
      timeAtJob: "1 year 2 months",
      tagline: "Ill bring ya what you need!",
      accountBalance: 220.72,
      rating: 4.81
    },
  ]);
};
