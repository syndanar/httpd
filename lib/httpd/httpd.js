
const httpd = function(settings) {

    const setup = (property, type, value) => {
        return Object.prototype.hasOwnProperty.call(settings, property) && settings[property] instanceof type ? settings[property] : value;
    }

    this.routes = [];
    
    this.server = http.createServer();
    
    this.port = setup('port', Number, 8080);
    this.cors = setup('cors', Boolean, false);

    this.server.listen(this.port, err => {
        if(err) {
            console.log(err);
        } else {
            console.log(`httpd server listen on port ${this.port}`);
        }
    });


    /**
     * 
     * @param {string} path URI path to endpoint (e.g. /api/resource)
     * @param {string} method HTTP method (e.g. GET)
     * @param {Function} callback function for incoming request
     */
    addRoute(path, method, callback) {
        if(this.routes.find(r => r.path === path && r.method === method)) {
            throw new Error("An attempt to add an existing route.");
        } else {
            this.routes.push({
                path: path,
                method: method,
                callback: callback
            });
        }        
    }
}

module.exports = httpd;