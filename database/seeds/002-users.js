
const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {
      username: "username1",
      fullName: "Tom Hessburg",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/54379012_10156226514467944_5087497768381972480_n.jpg?_nc_cat=110&_nc_ht=scontent.ftpa1-1.fna&oh=ad3fca79eb090f5916b49b53374bd879&oe=5D15C8EB"
    },
    {
      username: "username2",
      fullName: "Blah Blah",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/54379012_10156226514467944_5087497768381972480_n.jpg?_nc_cat=110&_nc_ht=scontent.ftpa1-1.fna&oh=ad3fca79eb090f5916b49b53374bd879&oe=5D15C8EB"
    },
  ]);
};
