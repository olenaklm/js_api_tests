const chai = require('chai');
const expect = chai.expect;
const api = require('../api/api');

describe('Users API', () => {
  describe('/users/get_current_account', () => {
    it('should return the current user account information', async () => {
      const response = await api.post('/users/get_current_account', null);
      expect(response.status).to.equal(200);
      expect(response.data).to.have.property('account_id');
      expect(response.data).to.have.property('name');
      expect(response.data).to.have.property('email');
    });
    
    it('should return the space usage information', async () => {
        const response = await api.post('/users/get_space_usage', null);
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property('allocation').to.have.property('.tag').to.equal('individual');
        expect(response.data).to.have.property('allocation').to.have.property('allocated').to.equal(2684354560);
        expect(response.data).to.have.property('used')
    });

  });
});