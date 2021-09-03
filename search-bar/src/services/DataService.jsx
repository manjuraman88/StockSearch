import { doPutFetchResponse, doGetFetch } from "./utils/fetchUtils";
import {
  GET_ALL_SERVERS,
  UPDATE_VERSION_DETAILS,
  REFRESH_SERVER_DETAILS,
  GET_ALL_CONTAINERS,
  GET_SERVER_DETAILS,
} from "./config/urls";

export function getAllServers() {
  return doGetFetch(GET_ALL_SERVERS);
}

export function getContainerDetails() {
  return doGetFetch(GET_ALL_CONTAINERS);
}

export function updateVersionInformation(data, name) {
  const url = {
    url: `${UPDATE_VERSION_DETAILS.url}/${name}`,
  };
  return doPutFetchResponse(url, data);
  /* const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: "ok",
      });
    }, 0);
  });

  return myPromise; */
}

export function refreshServerDetails() {
  return doGetFetch(REFRESH_SERVER_DETAILS);
}

export function getServerDetails(name) {
  const url = {
    url: `${GET_SERVER_DETAILS.url}/${name.server}`,
  };
  return doGetFetch(url);
}
