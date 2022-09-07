import queryStringify from "./QueryStringify";

const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};

type DataObj = {
  [key:string]:any;
}

export default class HTTPTransport {
    get = (url:string, options: DataObj = {}) => {
        let newUrl = url;
        if(!!options.data){
            newUrl = url + queryStringify(options.data)
        }
        return this.request(newUrl, {...options, method: METHODS.GET}, options.timeout);
    };

    post = (url:string, options: DataObj = {}) => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    put = (url:string, options: DataObj = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    delete = (url:string, options: DataObj = {}) => { 
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request = (url:string, options: DataObj = {}, timeout = 5000) => {
        const {headers = {}, method, data} = options;

        return new Promise(function(resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            xhr.open(method,url);
            Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
        
            xhr.onload = function() {
                resolve(xhr);
            };
            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;
            
            if (method === "GET" || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}