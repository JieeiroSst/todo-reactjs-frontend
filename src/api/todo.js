import { Url } from "../actions";

export const queryData = () => {
  const data = JSON.parse(sessionStorage.getItem("userToken"));
  const token = data.data;
  return new Promise((resolve, reject) => {
    fetch(Url + "api/tasks", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
