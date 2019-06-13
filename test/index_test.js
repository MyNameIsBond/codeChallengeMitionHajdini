process.env.NODE_ENV = 'test' // so we can test.
const chai = require('chai')
const chaihttp = require('chai-http')
const server = require('../index.js')
const should = chai.should()
chai.use(chaihttp)
describe('Test notes', () => {
  it('return an array of notes that are archived', done => {
    chai
      .request(server)
      .get('/notes/archive/true')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
      })
    done()
  })

  it('return an array of notes that are not archived', done => {
    chai
      .request(server)
      .get('/notes/archive/false')
      .end((err, res) => {
        res.body.should.be.a('array')
      })
    done()
  })

  it('it saves a note', done => {
    chai
      .request(server)
      .get('/notes/save/this_is_a_note')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.length.should.be.eql(0)
      })
    done()
  })
})

// to run tests 'npm run test'
