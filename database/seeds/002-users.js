
const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {
      username: "username1",
      fullName: "Tom Hessburg",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/52601962_2354627347882064_7750757111176364032_o.jpg?_nc_cat=108&_nc_ht=scontent.ftpa1-1.fna&oh=56d731cba11c08770efad7da762f7b90&oe=5D35D290"
    },
    {
      username: "username2",
      fullName: "Jeff Paynter",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/46069828_10217945364284210_1497091269988450304_n.jpg?_nc_cat=110&_nc_ht=scontent.ftpa1-1.fna&oh=063f800e8d537cc1ef20cece6cbbb015&oe=5D36D6CD"
    },
    {
      username: "FrankieH",
      fullName: "Frank Hessburg",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/42954479_10155859660782944_7024188175295709184_n.jpg?_nc_cat=111&_nc_ht=scontent.ftpa1-2.fna&oh=5d297a78c1a4294b14cb554c1edd5bd7&oe=5D44C344"
    },
    {
      username: "patty",
      fullName: "Patrick Pattison",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/52846878_2437704546260188_3590506274778775552_n.jpg?_nc_cat=110&_nc_ht=scontent.ftpa1-1.fna&oh=305caca272b38732c14cf9e910ff35de&oe=5D33B544"
    },
  ]);
};
