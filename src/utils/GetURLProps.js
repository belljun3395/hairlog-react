const BASE_URL = "https://hairlog.jongjun.com"
const PAGESIZE = 6;

export const GET_DESIGNER_URL = BASE_URL+"/api/v1/designers";
export const POST_LOGIN_URL = BASE_URL+"/api/v1/members/login";
export const GET_DESIGNERLIST_URL = BASE_URL+"/api/v1/designers";
export const POST_SIGNUP_URL = BASE_URL+"/api/v1/members";
export const GET_MEMBERS_URL = BASE_URL+"/api/v1/members";

export function getRecordsPagesURL(category, page) {
  if (category === undefined) {
    return BASE_URL+`/api/v1/records/pages?page=${page}&size=${PAGESIZE}`;
  } else {
    return BASE_URL+`/api/v1/records/pages?page=${page}&size=${PAGESIZE}&c=${category}`;
  }
}

export function getRecordURL(recordId, category) {
  return BASE_URL+`/api/v1/records?rid=${recordId}&c=${category}`;
}

export function getRecordWriteUrl(category) {
  if (category === "CUT") {
    return BASE_URL+"/api/v1/records/cut";
  } else if (category === "PERM") {
    return BASE_URL+"/api/v1/records/perm";
  } else if (category === "DYEING") {
    return BASE_URL+"/api/v1/records/dyeing";
  }
}

export function getRecordDeleteUrl(recordId) {
  return BASE_URL + `/api/v1/records?rid=${recordId}`
}