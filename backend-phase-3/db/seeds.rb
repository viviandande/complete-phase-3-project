
puts "Seeding"

Guest.create([
    {
      "firstname": "Sharon",
     "lastname": "Kipkirui",
      "email": "sharonkipkirui22@gmail.com",
      "seatno": 9,
      "typeofaccess": "Standard"
    },
    {
      "firstname": "Vivian",
      "lastname": "Dande",
      "email": "viviandande@gmail.com",
      "seatno": 2,
      "typeofaccess": "VIP"
    },
    {
      "firstname": "Lilian",
      "lastname": "Njoki",
      "email": "liliannjoki111@gmail.com",
      "seatno": 3,
      "typeofaccess": "VIP"
    },
    {
      "firstname": "Liza",
      "lastname": "Gordon",
      "email": "lgordon@gmail.com",
      "seatno": 15,
      "typeofaccess": "standard",

    },
    {
      "firstname": "Meagan",
      "lastname": "Carol",
      "email": "carolm15@gmail.com",
      "seatno": 9,
      "typeofaccess": "standard",

    },
    {
      "firstname": "Adam",
      "lastname": "Hills",
      "email": "hillsadam@gmail.com",
      "seatno": 13,
      "typeofaccess": "VIP",

    },
    {
      "firstname": "Essy",
      "lastname": "Amondi",
      "email": "essy44@gmail.com",
      "seatno": 10,
      "typeofaccess": "standard",

    },
    {
      "firstname": "John",
      "lastname": "Maina",
      "email": "johnmaina@gmail.com",
      "seatno": 11,
      "typeofaccess": "VIP",

    },
    {
      "firstname": "Lorna",
      "lastname": "Dande",
      "email": "dande01@gmail.com",
      "seatno": 9,
      "typeofaccess": "standard",
    },
    {
      "firstname": "Amos",
      "lastname": "Onyango",
      "email": "amosonyango@gmail.com",
      "seatno": 18,
      "typeofaccess": "VIP",

    },
    {
      "firstname": "Paula",
      "lastname": "Bracho",
      "email": "bracho77@gmail.com",
      "seatno": 12,
      "typeofaccess": "standard",

    },
    {
      "firstname": "Evance",
      "lastname": "Ochieng",
      "email": "ochie15@gmail.com",
      "seatno": 19,
      "typeofaccess": "VIP",

    }
  ])

  Event.create([
    {
      "typeofevent": "babyshower",
      "date": "2023-04-30",
      "time": "18:41",
      "numberofguests": 30,

    },
    {
      "typeofevent": "wedding",
      "date": "2024-01-03",
      "time": "09:00",
      "numberofguests": 300,

    },
    {
      "typeofevent": "babyshower",
      "date": "2023-03-15",
      "time": "02:52",
      "numberofguests": 20,

    },
    {
      "typeofevent": "galadinner",
      "date": "2023-02-11",
      "time": "22:18",
      "numberofguests": 100,
    }
  ])