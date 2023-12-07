const chai = require('chai');
const expect = chai.expect;
const api = require('../api/api');

describe('Files API', () => {
    describe('/files/delete_v2', () => {
      it('should delete a folder before creating to Dropbox', async () => {
        try {
          const response = await api.post('/files/delete_v2', {
            "path": "/JS2/tests",
          });
        } catch (error) {
          console.log(error.response.data);
          console.log(error.response.status);
        }
      });

      it('should create a folder to Dropbox', async () => {
          const response = await api.post('/files/create_folder_v2', {
            "autorename": false,
            "path": "/JS2/tests"
          });
          expect(response.status).to.equal(200);
          expect(response.data).to.have.property('metadata').to.have.property('name');
          expect(response.data).to.have.property('metadata').to.have.property('path_lower');
          expect(response.data).to.have.property('metadata').to.have.property('path_display');
          expect(response.data).to.have.property('metadata').to.have.property('id');
      });    

      it('should return an error for re-creating a folder', async () => {
        try {
          const response = await api.post('/files/create_folder_v2', {
            "autorename": false,
            "path": "/JS2/tests"
          });
        } catch (error) {
          expect(error.response.status).to.equal(409);
          expect(error.response.data).to.have.property('error_summary');
        }
      });
      
      it('should delete a folder to Dropbox', async () => {
          const response = await api.post('/files/delete_v2', {
            "path": "/JS2/tests"
          });
          expect(response.status).to.equal(200);
          expect(response.data).to.have.property('metadata').to.have.property('name');
          expect(response.data).to.have.property('metadata').to.have.property('path_lower');
          expect(response.data).to.have.property('metadata').to.have.property('path_display');
          expect(response.data).to.have.property('metadata').to.have.property('id');
      });    

      it('should return an error for re-deleting a folder', async () => {
        try {
          const response = await api.post('/files/delete_v2', {
            "path": "/JS2/tests"
          });
        } catch (error) {
          expect(error.response.status).to.equal(409);
          expect(error.response.data).to.have.property('error_summary');
        }
      });

      it('should return the metadata for a file or folder', async () => {
          const response = await api.post('/files/get_metadata', {
            "include_deleted": false,
            "include_has_explicit_shared_members": false,
            "include_media_info": false,
            "path": "/JS1/JS11"
          });
          expect(response.status).to.equal(200);
          expect(response.data).to.have.to.have.property('.tag');
          expect(response.data).to.have.to.have.property('name');
          expect(response.data).to.have.to.have.property('path_lower');
          expect(response.data).to.have.to.have.property('path_display');
          expect(response.data).to.have.to.have.property('id');
      });

      it('should return the metadata for a file or folder', async () => {
         try {
          const response = await api.post('/files/get_metadata', {
            "include_deleted": false,
            "include_has_explicit_shared_members": false,
            "include_media_info": false,
            "path": "/JS1/JS11"
          });
        } catch (error) {
          expect(error.response.status).to.equal(409);
          expect(error.response.data).to.have.to.have.property('error_summary');
        }
      });
  
    });
     
});