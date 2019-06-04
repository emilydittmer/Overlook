function fetchData(type) {
  let url;
  if(type === 'roomServices') {
    url = `https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/${type}`;
  } else {
    url = `https://fe-apps.herokuapp.com/api/v1/overlook/1903/${type}/${type}`;
  }
  return fetch(url)
  .then(response => response.json())
  .then(data => data[type])
}

export default fetchData;