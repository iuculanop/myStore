export function checkStatus(response) {
  if (response.status && response.status >= 200 && response.status < 300) {
    return response;
  } // otherwise signal the error
  const error = new Error(response.statusText || 'Invalid response');
  error.response = response;
  throw error;
}

export function parseJSON(response) {
  return response.status === 204 ? { payLoad: [] } : response.json();
}
