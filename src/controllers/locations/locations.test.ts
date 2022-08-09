import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../../../index';

chai.use(chaiHttp);

describe('/locations endpoint', () => {

  let env: NodeJS.ProcessEnv;

  before(() => {
    env = process.env;
    process.env.LOCATIONS_APP_PORT = Math.random().toString();
  });

  after(() => {
    process.env = env;
  });

  describe('called without query parameters', () => {
    it('fails with status code 400', (done) => {
      chai.request(app)
        .get('/locations')
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });

    it('contains a validation error list', (done) => {
      chai.request(app)
        .get('/locations')
        .end((err, res) => {
          expect(res.body).to.have.property('errors');
          done();
        });
    });

    it('contains validation error for swlat, swlng, nelat and nelng that says they are required', (done) => {
      chai.request(app)
        .get('/locations')
        .end((err, res) => {
          expect(res.body.errors).to.deep.include({
            msg: 'south-west latitude is required',
            param: 'swlat',
            location: 'query'
          });
          expect(res.body.errors).to.deep.include({
            msg: 'south-west longitude is required',
            param: 'swlng',
            location: 'query'
          });
          expect(res.body.errors).to.deep.include({
            msg: 'north-east latitude is required',
            param: 'nelat',
            location: 'query'
          });
          expect(res.body.errors).to.deep.include({
            msg: 'north-east longitude is required',
            param: 'nelng',
            location: 'query'
          });
          done();
        });
    });
  });

  describe('called with only the nwlat query parameter', () => {

    const url = '/locations?swlat=30.232';

    it('fails with status code 400', (done) => {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });

    it('contains a validation error list with validation errors for all but swlat', (done) => {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          expect(res.body).to.have.property('errors');
          expect(res.body.errors).to.deep.include({
            msg: 'north-east longitude is required',
            param: 'nelng',
            location: 'query'
          });
          expect(res.body.errors).to.deep.include({
            msg: 'north-east latitude is required',
            param: 'nelat',
            location: 'query'
          });
          expect(res.body.errors).to.deep.include({
            msg: 'south-west longitude is required',
            param: 'swlng',
            location: 'query'
          });
          done();
        });
    });
  });

  describe('called with an invalid swlat query parameter', () => {
    it('swlat with a large number fails with status code 400', (done) => {
      chai.request(app)
        .get('/locations?swlat=23423&swlng=20&nelat=81&nelng=20')
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });

    it('swlat with a large number fails and includes a validation error for swlat only', (done) => {
      chai.request(app)
        .get('/locations?swlat=23423&swlng=20&nelat=81&nelng=20')
        .end((err, res) => {
          expect(res.body).to.have.property('errors');
          expect(res.body.errors).to.deep.include({
            value: '23423',
            msg: 'latitude must be less than or equal to 180',
            param: 'swlat',
            location: 'query'
          });
          expect(res.body.errors).not.to.deep.include({ param: 'swlng' });
          expect(res.body.errors).not.to.deep.include({ param: 'nelat' });
          expect(res.body.errors).not.to.deep.include({ param: 'nelng' });
          done();
        });
    });
  });


  describe('called with all valid query parameters', () => {
    const swlat = -125.06;
    const swlng = 35.99;
    const nelat = -119.79;
    const nelng = 39.48;
    const url = `/locations?swlat=${swlat}&swlng=${swlng}&nelat=${nelat}&nelng=${nelng}`;

    it('returns status code of 200', (done) => {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('returns 10 coordinates', (done) => {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.equal(10);
          done();
        });
    });

    it('each coordinate has lat/lng fields', (done) => {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          expect(res.body.length).to.equal(10);
          done();
        });
    });

    it('each lat and lng is within the bounding box', (done) => {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          expect(res.body[0].lat).to.be.within(swlat, nelat);
          expect(res.body[0].lng).to.be.within(nelat, nelng);
          expect(res.body[1].lat).to.be.within(swlat, nelat);
          expect(res.body[1].lng).to.be.within(nelat, nelng);
          expect(res.body[2].lat).to.be.within(swlat, nelat);
          expect(res.body[2].lng).to.be.within(nelat, nelng);
          expect(res.body[3].lat).to.be.within(swlat, nelat);
          expect(res.body[3].lng).to.be.within(nelat, nelng);
          expect(res.body[4].lat).to.be.within(swlat, nelat);
          expect(res.body[4].lng).to.be.within(nelat, nelng);
          expect(res.body[5].lat).to.be.within(swlat, nelat);
          expect(res.body[5].lng).to.be.within(nelat, nelng);
          expect(res.body[6].lat).to.be.within(swlat, nelat);
          expect(res.body[6].lng).to.be.within(nelat, nelng);
          expect(res.body[7].lat).to.be.within(swlat, nelat);
          expect(res.body[7].lng).to.be.within(nelat, nelng);
          expect(res.body[8].lat).to.be.within(swlat, nelat);
          expect(res.body[8].lng).to.be.within(nelat, nelng);
          expect(res.body[9].lat).to.be.within(swlat, nelat);
          expect(res.body[9].lng).to.be.within(nelat, nelng);
          done();
        });
    });

    it('each lat field is between -180 and 180', (done) => {
      chai.request(app)
        .get(url)
        .end((err, res) => {
            expect(res.body[0].lat).to.be.within(-180, 180);
          expect(res.body[1].lat).to.be.within(-180, 180);
          expect(res.body[2].lat).to.be.within(-180, 180);
          expect(res.body[3].lat).to.be.within(-180, 180);
          expect(res.body[4].lat).to.be.within(-180, 180);
          expect(res.body[5].lat).to.be.within(-180, 180);
          expect(res.body[6].lat).to.be.within(-180, 180);
          expect(res.body[7].lat).to.be.within(-180, 180);
          expect(res.body[8].lat).to.be.within(-180, 180);
          expect(res.body[9].lat).to.be.within(-180, 180);
          done();
        });
    });

    it('each lng field is between -90 and 90', (done) => {
      chai.request(app)
        .get(url)
        .end((err, res) => {
          expect(res.body[0].lng).to.be.within(-90, 90);
          expect(res.body[1].lng).to.be.within(-90, 90);
          expect(res.body[2].lng).to.be.within(-90, 90);
          expect(res.body[3].lng).to.be.within(-90, 90);
          expect(res.body[4].lng).to.be.within(-90, 90);
          expect(res.body[5].lng).to.be.within(-90, 90);
          expect(res.body[6].lng).to.be.within(-90, 90);
          expect(res.body[7].lng).to.be.within(-90, 90);
          expect(res.body[8].lng).to.be.within(-90, 90);
          expect(res.body[9].lng).to.be.within(-90, 90);
          done();
        });
    });
  });
});