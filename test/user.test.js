const chai = require('chai');
const expect = chai.expect;
const api = require('../api/api');

describe('Users API', () => {
  describe('/users/get_current_account', () => {
    it('should return the current user account information', async () => {
//      try {
      const response = await api.post('/users/get_current_account', null);
      expect(response.status).to.equal(200);
      expect(response.data).to.have.property('account_id');
      expect(response.data).to.have.property('name');
      expect(response.data).to.have.property('email');
      // } catch (error) {
      //       console.log(error.response.data);
      //       console.log(error.response.status);
      //   }
    });

    // it('should return an error for an invalid access token', async () => {
    //   try {
    //     const invalidApi = axios.create({
    //       baseURL: 'https://api.dropboxapi.com/2/',
    //       headers: {
    //         'Authorization': 'Bearer invalid_access_token',
    //         'Content-Type': 'application/json'
    //       }
    //     });
    //     const response = await invalidApi.post('/users/get_current_account', null);
    //   } catch (error) {
    //     // expect(error.response.status).to.equal(401);
    //     // expect(error.response.data).to.have.property('error_summary');
    //     console.log(error.response.status);
    //     console.log(error.response.data);
    //   }
    // });
    
    it('should return the space usage information', async () => {
//      try {
        const response = await api.post('/users/get_space_usage', null);
        expect(response.status).to.equal(200);
        expect(response.data).to.have.property('allocation').to.have.property('.tag').to.equal('individual');
        expect(response.data).to.have.property('allocation').to.have.property('allocated').to.equal(2684354560);
        expect(response.data).to.have.property('used')
      // } catch (error) {
      //   console.log(error.response.data);
      //   console.log(error.response.status);
      // }
    });

  });
});