export const maestro = 'https://services.jexia.stag';
export const signin_endpoint = 'auth/signin';
export const policy_endpoint = 'rakshak/';
export const dataset_endpoint = 'mimir/ds';

export const buildManagementUrl = (projectId: string, endpoint: string): string => {
  return `${maestro}/management/${projectId}/${endpoint}`;
};