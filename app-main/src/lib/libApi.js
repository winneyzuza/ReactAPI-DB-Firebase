const endpoint = 'http://5a714206ce7c440012e89f58.mockapi.io/';

const headers = () => {
  const h = new Headers();
  h.append('Content-Type', 'application/json');

  return h;
};



const request = (method, path, body) => {
  const url = `${endpoint}${path}`;

  console.log(url)
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