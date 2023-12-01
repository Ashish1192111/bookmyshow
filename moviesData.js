const movies = [
  {
    id: 0,
    title: "War",
    genre: "Action",
    img: "https://upload.wikimedia.org/wikipedia/en/6/6f/War_official_poster.jpg",
    director: "Siddharth Anand",
    description: "An action-packed Bollywood movie.",
    theaters: [
      {
        city: "NCR",
        name: "Cinepolis: DLF Place, Saket",
        timings: [
          { date: "2023-10-01", time: "13:15", price: 420 },
          { date: "2023-10-01", time: "17:30", price: 380 },


        ],
        seats: {
          "13:15": ["A1", "A2", "B1", "B2"],
          "17:30": ["C1", "C2", "D1", "D2"],
        },
      },


      {
        city: "Mumbai",
        name: "PVR: Phoenix Marketcity, Kurla",
        timings: [
          { date: "2023-10-01", time: "14:00", price: 410 },
          { date: "2023-10-01", time: "19:45", price: 380 },
        ],
        seats: {
          "14:00": ["E1", "E2", "F1", "F2"],
          "19:45": ["G1", "G2", "H1", "H2"],
        },
      },
    ],
    language: "Hindi",
    format: "2D",
  },
  {
    id: 1,
    title: "Avengers: Endgame",
    genre: "Action",
    img: "https://hips.hearstapps.com/hmg-prod/images/d1pklzbuyaab0la-1552597012.jpg?crop=1.00xw:0.678xh;0,0.0616xh&resize=1200:*",
    director: "Anthony Russo, Joe Russo",
    description:
      "The Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    theaters: [
      {
        city: "Delhi",
        name: "AMC Empire 25",
        timings: [
          { date: "2023-10-01", time: "15:00", price: 450 },
          { date: "2023-10-01", time: "19:30", price: 460 },
        ],
        seats: {
          "15:00": ["A1", "A2", "B1", "B2"],
          "19:30": ["C1", "C2", "D1", "D2"],
        },
      },
      {
        city: "NCR",
        name: "Cinemark 18",
        timings: [
          { date: "2023-10-01", time: "14:15", price: 440 },
          { date: "2023-10-01", time: "20:00", price: 450 },
        ],
        seats: {
          "14:15": ["E1", "E2", "F1", "F2"],
          "20:00": ["G1", "G2", "H1", "H2"],
        },
      },
    ],
    language: "English",
    format: "3D",
  },
  {
    id: 2,
    title: "Bhaag Milkha Bhaag",
    genre: "Biography",
    img: "https://m.media-amazon.com/images/M/MV5BMTY1Nzg4MjcwN15BMl5BanBnXkFtZTcwOTc1NTk1OQ@@._V1_FMjpg_UX1000_.jpg",
    director: "Rakeysh Omprakash Mehra",
    description:
      'The story of the "Flying Sikh" - world champion runner and Olympian Milkha Singh.',
    theaters: [
      {
        city: "Delhi",
        name: "PVR: Select Citywalk, Saket",
        timings: [
          { date: "2023-10-01", time: "16:30", price: 420 },
          { date: "2023-10-01", time: "20:45", price: 430 },
        ],
        seats: {
          "16:30": ["A1", "A2", "B1", "B2"],
          "20:45": ["C1", "C2", "D1", "D2"],
        },
      },
      {
        city: "Chennai",
        name: "Wave Cinemas: Elante Mall",
        timings: [
          { date: "2023-10-01", time: "15:15", price: 410 },
          { date: "2023-10-01", time: "21:00", price: 420 },
        ],
        seats: {
          "15:15": ["E1", "E2", "F1", "F2"],
          "21:00": ["G1", "G2", "H1", "H2"],
        },
      },
    ],
    language: "Hindi",
    format: "2D",
  },
  {
    id: 3,
    title: "Petta",
    genre: "Action",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5bb2169968357.5b934000eeee7.jpg",
    director: "Karthik Subbaraj",
    description: "An action-packed Tamil movie starring Rajinikanth.",
    theaters: [
      {
        city: "Chennai",
        name: "Sathyam Cinemas",
        timings: [
          { date: "2023-10-01", time: "14:45", price: 430 },
          { date: "2023-10-01", time: "19:15", price: 440 },
        ],
        seats: {
          "14:45": ["A1", "A2", "B1", "B2"],
          "19:15": ["C1", "C2", "D1", "D2"],
        },
      },
      {
        city: "Banglore",
        name: "Inox: Garuda Mall",
        timings: [
          { date: "2023-10-01", time: "15:30", price: 420 },
          { date: "2023-10-01", time: "21:30", price: 430 },
        ],
        seats: {
          "15:30": ["E1", "E2", "F1", "F2"],
          "21:30": ["G1", "G2", "H1", "H2"],
        },
      },
    ],
    language: "Tamil",
    format: "2D",
  },
];


const seats = [
  { seat: "A", seatNumber: ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15"],  charge : "400" },
  {
    seat: "B",
    seatNumber: ["B1",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6",
      "B7",
      "B8",
      "B9",
      "B10",
      "B11",
      "B12",
      "B13",
      "B14",
      "B15"
    ],
    charge : "400"
  },

  {
    seat: "C",
    seatNumber: [
      "C1",
      "C2",
      "C3",
      "C4",
      "C5",
      "C6",
      "C7",
      "C8",
      "C9",
      "C10",
      "C11",
      "C12",
      "C13",
      "C14",
      "C15",
      "C16",
      "C17",
      "C18",
      "C19",
      "C20",
      "C21",
      "C22",
      "C23",
      "C24",
      "C25"
    ],
    charge : "300"
  },

  {
    seat: "D",
    seatNumber: [
      "D1",
      "D2",
      "D3",
      "D4",
      "D5",
      "D6",
      "D7",
      "D8",
      "D9",
      "D10",
      "D11",
      "D12",
      "D13",
      "D14",
      "D15",
      "D16",
      "D17",
      "D18",
      "D19",
      "D20",
      "D21",
      "D22",
      "D23",
      "D24",
      "D25"
    ],
    charge : "300"
  },
  {
    seat: "E",
    seatNumber: [
      "E1",
      "E2",
      "E3",
      "E4",
      "E5",
      "E6",
      "E7",
      "E8",
      "E9",
      "E10",
      "E11",
      "E12",
      "E13",
      "E14",
      "E15",
      "E16",
      "E17",
      "E18",
      "E19",
      "E20",
      "E21",
      "E22"
    ],
    charge : "300"
  },

  {
    seat: "F",
    seatNumber: [
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "F12",
      "F13",
      "F14",
      "F15",
      "F16",
      "F17",
      "F18",
      "F19",
      "F20",
      "F21",
      "F22"
    ],
    charge : "300"
  },

  {
    seat: "G",
    seatNumber: [
      "G1",
      "G2",
      "G3",
      "G4",
      "G5",
      "G6",
      "G7",
      "G8",
      "G9",
      "G10",
      "G11",
      "G12",
      "G13",
      "G14",
      "G15",
      "G16",
      "G17",
      "G18",
      "G19",
      "G20",
      "G21",
      "G22"
    ],
    charge : "300"
  },

  {
    seat: "H",
    seatNumber: [
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "H7",
      "H8",
      "H9",
      "H10",
      "H11",
      "H12",
      "H13",
      "H14",
      "H15",
      "H16",
      "H17",
      "H18",
      "H19",
      "H20",
      "H21",
      "H22"
    ],
    charge : "300"
  },

  {
    seat: "I",
    seatNumber: [
      "I1",
      "I2",
      "I3",
      "I4",
      "I5",
      "I6",
      "I7",
      "I8",
      "I9",
      "I10",
      "I11",
      "I12",
      "I13",
      "I14",
      "I15",
      "I16",
      "I17",
      "I18",
      "I19",
      "I20",
      "I21",
      "I22"
    ],
    charge : "300"
  },

  {
    seat: "J",
    seatNumber: [
      "J1",
      "J2",
      "J3",
      "J4",
      "J5",
      "J6",
      "J7",
      "J8",
      "J9",
      "J10",
      "J11",
      "J12",
      "J13",
      "J14",
      "J15",
      "J16",
      "J17",
      "J18",
      "J19",
      "J20",
      "J21",
      "J22"
    ],
    charge : "300"
  },

]

const bookings = [];

const users = [
  { id: 1, email: "test@test.com", password: "testpassword", fname: "Ashish", lname: "Sharma", married: "No" },
];



module.exports = { movies, users, seats, bookings };



