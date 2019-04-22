const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('once', () => { done(); })
    .on('error', (error) => {
      console.warn(`Error: ${err}`)
    });
})

beforeEach((done) => {
  mongoose.connection.collections.users.drop( () => {
    done()
  });
})