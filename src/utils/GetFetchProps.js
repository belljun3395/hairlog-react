import {
  baseRecordBodyConverter,
  categoryRecordBodyConverter,
} from "./Converter";
const JSON_HEADER = { "Content-Type": "application/json" };


export function getAuthHeader(authCookie) {
  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + authCookie,
  };
}

export function getSignUpFetchProps(data) {
  return {
    method: "POST",
    headers: JSON_HEADER,
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      name: data.name,
      sex: data.sex,
      cycle : 7
    }),
  };
}

export function getLogInFetchProps(data) {
  return {
    method: "POST",
    headers: JSON_HEADER,
    body: JSON.stringify({
      email: data.id,
      password: data.password,
    }),
  };
}

export function getDesignerFetchProps(authCookie, data) {
  return {
    method: "POST",
    headers: getAuthHeader(authCookie),
    body: JSON.stringify({
      designerName: data.designerName,
      designerSalon: data.designerSalon,
      designerFav: true,
    }),
  };
}

export function getRecordWriteFetchProps(
  authCookie,
  data,
  category,
  hurt,
  date
) {
  return {
    method: "POST",
    headers: getAuthHeader(authCookie),
    body: JSON.stringify(
      Object.assign(
        baseRecordBodyConverter(data, date),
        categoryRecordBodyConverter(category, data, hurt)
      )
    ),
  };
}

export function getRecordDeleteFetchProps(authCookie) {
  return {
    method: "DELETE",
    headers: getAuthHeader(authCookie)
  };
}
