
const headers = () => {
  const h = new Headers();
  h.append('Content-Type', 'application/json');

  return h;
};



const request = (method, path, body) => {
  const url = `${path}`;

  const options = { method, 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    } 
  };

  if (body && method == 'POST') {
    
  console.log('My Body 1' + body)
    options.body = JSON.stringify({
               contents: body
             })
  }
  return fetch(new Request(url, options));
};


const postRequest = (method, path, body) => {
  const url = `${path}`;

  const options = { method, headers: headers() };

  
  if (body && method == 'POST') {
     options.body = JSON.stringify({
               contents: body
             })
  }
  return fetch(new Request(url, options));
};


const LibApi = {
  get(path) {
    return request('GET', path);
  },
  post(path, data = {}) {
    return request('POST', path, data);
  },
  delete(path) {
    return request('DELETE', path);
  },
};

export default LibApi;