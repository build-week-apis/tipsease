
const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  return knex('serviceWorkers').insert([
    {
      username: "swUsername1",
      fullName: "Tom Hessburg",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/52601962_2354627347882064_7750757111176364032_o.jpg?_nc_cat=108&_nc_ht=scontent.ftpa1-1.fna&oh=56d731cba11c08770efad7da762f7b90&oe=5D35D290",
      serviceType: "bellhop",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      timeAtJob: "2 years",
      tagline: "A helping hand :)",
      workplace: "rusteak",
      accountBalance: 150.50,
      rating: 4.20,
      numOfRatings: 52
    },
    {
      username: "swUsername2",
      fullName: "Jane Doe",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/54379012_10156226514467944_5087497768381972480_n.jpg?_nc_cat=110&_nc_ht=scontent.ftpa1-1.fna&oh=ad3fca79eb090f5916b49b53374bd879&oe=5D15C8EB",
      serviceType: "Waitress",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      timeAtJob: "1 year 2 months",
      tagline: "Ill bring ya what you need!",
      workplace: "Avion",
      accountBalance: 220.72,
      rating: 4.81,
      numOfRatings: 27
    },
    {
      username: "singerguy57",
      fullName: "Jim Jones",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/12507510_10204072291406192_1016823161049511195_n.jpg?_nc_cat=101&_nc_ht=scontent.ftpa1-1.fna&oh=c1d7aff11cf09f2e2fa92320d3e644be&oe=5D4AE786",
      serviceType: "Singer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      timeAtJob: "1 year 9 months",
      tagline: "Heres a little diddy",
      workplace: "HOB",
      accountBalance: 20.19,
      rating: 4.11,
      numOfRatings: 10
    },
    {
      username: "TimmyTubo",
      fullName: "Tim Maitland",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/48421170_10156192486388246_6554878009394855936_o.jpg?_nc_cat=107&_nc_ht=scontent.ftpa1-1.fna&oh=0bb69b4bea00216eda2f3f082264231c&oe=5D394129",
      serviceType: "DJ",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      timeAtJob: "4 years",
      tagline: "Spinnin!",
      workplace: "Avalon",
      accountBalance: 90.24,
      rating: 4.77,
      numOfRatings: 24
    },
    {
      username: "Geoffry12321",
      fullName: "Geoff Jeffries",
      password: bcrypt.hashSync('password', 8),
      photoUrl: "https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/53478318_2363387077005748_1667066245700124672_n.jpg?_nc_cat=104&_nc_ht=scontent.ftpa1-2.fna&oh=c10989d43516c0f51d1b59c662b474bb&oe=5D75C6AE",
      serviceType: "Waiter",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      timeAtJob: "1 year",
      tagline: "Servin up the sauce!",
      workplace: "fancy restaurant place",
      accountBalance: 490.04,
      rating: 4.29,
      numOfRatings: 62
    },
  ]);
};
