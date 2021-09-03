import fetch from "node-fetch";
export const getFinalUrl = (url) => {
  const finalUrl = process.env.REACT_APP_API_DOMAIN + url.url;
  return finalUrl;
};
export function getKeyValuePairs(params, separator) {
  return `${Object.entries(params).reduce(
    (tempUrl, [key, value]) => `${tempUrl}${key}=${value}${separator}`,
    ""
  )}`;
}
export function doPostFetch(url, params = {}) {
  const finalUrl = getFinalUrl(url);
  return fetch(finalUrl, {
    method: "post",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
      "PRIVATE-TOKEN": "s_2eGpzGLzzCqKy1xpaD",
    },
  }).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    if (response.status === 204 || response.status === 202) {
      return response;
    }
    return response.json();
  });
}

// to process PUT response
export function doPutFetchResponse(url, params = "") {
  const finalUrl = getFinalUrl(url);
  return fetch(finalUrl, {
    method: "put",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
      "PRIVATE-TOKEN": "s_2eGpzGLzzCqKy1xpaD",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((res) => {
      return res;
    });
}

// Get data without Params
export function doGetFetch(url) {
  const finalUrl = getFinalUrl(url);
  return fetch(finalUrl, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "PRIVATE-TOKEN": "s_2eGpzGLzzCqKy1xpaD",
    },
  }).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
}
