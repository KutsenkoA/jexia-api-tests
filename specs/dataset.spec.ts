import 'mocha';
import * as joiAssert from 'joi-assert';
import { expect } from 'chai';
import { buildManagementUrl, dataset_endpoint } from '../data/data_endpoints';
import { projectId } from '../data/data_entrance';
import { valid_dataset } from '../data/data_dataset.models';
import { datasetSchema } from '../joi-schemas/dataset.schema';
import { login, request } from '../helpers';

const API_DELAY = 5000;

describe('Dataset API', function() {
  let token: string;

  this.timeout(API_DELAY);

  before(async () => {
    token = await login();
  });

  describe('Create Dataset API', () => {
    let dataset;

    it('should return status 200',  async () => {
      const { status, result } = await request('POST', buildManagementUrl(projectId, dataset_endpoint), valid_dataset, token);
      expect(status).to.be.equal(200);
      dataset = result;
    });

    it('should return proper dataset object', () => {
      joiAssert(dataset, datasetSchema);
    });

    it('created dataset should have the name that was sent to API', () => {
      expect(dataset.name).to.be.equal(valid_dataset.name);
    });
  })

});