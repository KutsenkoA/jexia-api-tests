import 'mocha';
import * as joiAssert from 'joi-assert';
import { expect } from 'chai';
import { login, request } from '../helpers';
import { buildManagementUrl, policy_endpoint } from '../data/data_endpoints';
import { projectId } from '../data/data_entrance';
import { valid_policy } from '../data/data_policy.models';
import { policySchema } from '../joi-schemas/policy.schema';

const API_DELAY = 5000;

describe('Policy API', function() {
  let token: string;

  this.timeout(API_DELAY);

  before(async () => {
    token = await login();
  });

  describe('Create Policy API', async () => {
    let policy;

    it('should return status 200',  async () => {
      const { status, result } = await request('POST', buildManagementUrl(projectId, policy_endpoint), valid_policy, token);
      expect(status).to.be.equal(200);
      policy = result;
    });

    it('should be proper policy object', () => {
      joiAssert(policy, policySchema);
    });

    it('should contain proper data', () => {
      expect(policy.description).to.be.equal(valid_policy.description);
      expect(policy.resources).to.be.equal(valid_policy.resources);
      expect(policy.subjects).to.be.equal(valid_policy.subjects);
    });
  });
});
