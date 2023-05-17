export function extractAccessTokenFromData(data) {
  return data.data.token.accessToken;
}

export function extractData(data) {
  return data.data;
}
