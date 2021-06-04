let mongoose = require('mongoose');
let db = require('../models/student');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/readerfeeder',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

let studentSeed = [
  {
    name: 'Gary Studious',
    stars: 3,
    email: 'grider27@gmail.com',
    teacherId: '1234456t3987536987534',
  },
  {
    name: 'Mike Studious',
    stars: 5,
    email: 'mike@gmail.com',
    teacherId: '1234456t3987536987534',
  },
  {
    name: 'Vinh Studious',
    stars: 7,
    email: 'vinh@gmail.com',
    teacherId: '1234456t3987536987534',
  },
  {
    name: 'Juan Studious',
    stars: 3,
    email: 'juan@gmail.com',
    teacherId: '1234456t3987536987534',
  },
];

db.deleteMany({})
  .then(() => db.collection.insertMany(studentSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
