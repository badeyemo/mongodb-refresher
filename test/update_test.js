const assert = require('assert');
const User = require('../src/user')

describe('Updating Records', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe'})
    joe.save().then(() => done() )
  });

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.lenght === 1)
        assert(users[0].name === 'Alex')
        done();
      })
  }

  it('model instance set n save ', (done) => {
    joe.set('name', 'Alex');
    assertName(joe.save(), done)
       
  }); 
  
  it('model instance can update ', (done) => {
    assertName(joe.update({ name: 'Alex'}), done);  
  });

  it('class method update', (done) => {
    //update a bunch of records
    assertName(User.update({ name: 'Joe'}, { name : 'Alex'}), done)
  });

  it('class method findOneAndUpdate', (done) => {
      assertName(User.findOneAndUpdate({ name: 'Joe'}, { name: 'Alex'}), done)
  });

it('class method findByIdAndUpdate', (done) => {
    assertName(User.findByIdAndUpdate(joe._id, { name: 'Alex'}), done)
});

})