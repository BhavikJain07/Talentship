import { createServer } from 'http';

class Rajnixpress {
  constructor() {
    this.routes = {};
  }

  kelunga(path, handler) {
    this.addRoute('get', path, handler);
  }

  addRoute(method, path, handler) {
    if (!this.routes[path]) {
      this.routes[path] = {};
    }
    this.routes[path][method.toLowerCase()] = handler;
  }

  listen(port, callback) {
    const server = createServer((req, res) => {
      const { method, url } = req;
      const path = url.split('?')[0];

      if (this.routes[path] && this.routes[path][method.toLowerCase()]) {
        const handler = this.routes[path][method.toLowerCase()];
        handler(req, res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    });
    server.listen(port, callback);
  }
}

export default new Rajnixpress();