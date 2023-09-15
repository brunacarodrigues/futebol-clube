import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import TeamsModel from '../models/TeamsModel';
import { getTeam, getTeams } from './mocks/teamsMock';

describe('Testing the Teams Endpoint', () => {

  describe('Endpoint GET/teams', () => {

    before(async () => sinon.stub(TeamsModel.prototype, 'findAll').resolves(getTeams));
    after(() => (TeamsModel.prototype.findAll as sinon.SinonStub).restore());
  
    it ('Endpoint GET/teams succeeded', async () => {
      const get = await chai.request(app).get('/teams');
  
      expect(get.status).to.equal(200);
      expect(get.body).to.be.an('array');
      expect(get.body).to.have.length(getTeams.length);
    });
  });

  describe('Enspoint GET/teams/:id', () => {

    before(async () => sinon.stub(TeamsModel.prototype, 'findOne').resolves(getTeam));
    after(() => (TeamsModel.prototype.findOne as sinon.SinonStub).restore());

    it ('Endpoint GET/teams/:id succeeded', async () => {
      const get = await chai.request(app).get(`/teams/${getTeam.id}`);

      expect(get.status).to.equal(200);
      expect(get.body).to.deep.equal(getTeam);
    });
  });
});

function before(arg0: unknown) {
  throw new Error('Function not implemented.');
}


function after(arg0: () => void) {
  throw new Error('Function not implemented.');
}
