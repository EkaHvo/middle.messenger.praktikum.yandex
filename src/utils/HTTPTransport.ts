
const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
};

type dataObj = {
  [key:string]:any;
}

function queryStringify(data: dataObj = {}) {
    if (typeof data !== 'object') {
        throw new Error('Data not an object');
    }

    const result = Object.keys(data).reduce((result, key) => {
        return result += `${key}=${data[key]}&`;
    }, '?');

    return result.slice(0, -1);
}

class HTTPTransport {
    get = (url:string, options: dataObj = {}) => {
        let newUrl = url;
        if(!!options.data){
            newUrl = url + queryStringify(options.data)
        }
        return this.request(newUrl, {...options, method: METHODS.GET}, options.timeout);
    };

    post = (url:string, options: dataObj = {}) => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    put = (url:string, options: dataObj = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    delete = (url:string, options: dataObj = {}) => { 
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request = (url:string, options: dataObj = {}, timeout = 5000) => {
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