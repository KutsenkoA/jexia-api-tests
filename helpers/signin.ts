import { maestro, signin_endpoint } from '../data/data_endpoints';
import { valid_credentials } from '../data/data_entrance';
import fetch from 'node-fetch';

export const login = async () => {
  const { access_token } = await fetch(
    maestro + '/' + signin_endpoint, 
    { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(valid_credentials)
    }
  ).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Signin failed");
    }
  });

  return access_token;
}