import jsonFile from '../test.json';

export const getJsonData = (url = jsonFile) => {

  return new Promise((resolve, reject) => {
    if (typeof url !== "object") {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'json';
      xhr.onload = function () {
        setTimeout(resolve(xhr.response), 2000);
      };
      xhr.onError = function () {
        return reject;
      };
      xhr.send();
    } else {
      setTimeout(() => {
        resolve(url)
      }, 2000);
    }
  });

};
