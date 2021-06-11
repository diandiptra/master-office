import { axiosBase } from "./api-base";

// GET
export function fnGET(apiPath) {
  return new Promise((resolve, reject) => {
    axiosBase
      .get(apiPath)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// POST
export function fnPOST(apiPath, frmData) {
  console.log(apiPath, frmData);
  return new Promise((resolve, reject) => {
    axiosBase
      .post(apiPath, frmData)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
