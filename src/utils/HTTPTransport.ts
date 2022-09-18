export enum METHODS{
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH ='PATCH',
    DELETE = 'DELETE',
};

type Options = {
    method: METHODS;
    data?: any;
};

export default class HTTPTransport {

    static API_URL = 'https://ya-praktikum.tech/api/v2';
    protected endpont: string;

    constructor(endpont: string){
        this.endpont = `${HTTPTransport.API_URL}${endpont}`;
    }

    public get<Response>(path:string = '/'):Promise<Response> {
        return this.request<Response>(this.endpont + path);
    };

    public post<Response = void>(path:string, data?: unknown):Promise<Response> {
        return this.request<Response>(this.endpont + path, {
            method: METHODS.POST,
            data,
        });
    };

    public put<Response = void>(path:string, data: unknown):Promise<Response> {
        return this.request<Response>(this.endpont + path, {
            method: METHODS.PUT,
            data,
        });
    };

    public patch<Response = void>(path:string, data: unknown):Promise<Response> {
        return this.request<Response>(this.endpont + path, {
            method: METHODS.PATCH,
            data,
        });
    };

    public delete<Response>(path:string):Promise<Response> {
        return this.request<Response>(this.endpont + path, {
            method: METHODS.DELETE
        });
    };

    private request<Response>(url:string, options: Options = {method:METHODS.GET}):Promise<Response> {
        const {method, data} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onreadystatechange = () => {
                if(xhr.readyState === XMLHttpRequest.DONE){
                    resolve(xhr.response)
                }
            }

            xhr.onabort = () => reject({reason: 'abort'});
            xhr.onerror = () => reject({reason: 'network error'});
            xhr.ontimeout = () => reject({reason: 'timeout'});

            xhr.setRequestHeader('Content-Type', 'application/json')

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            if(method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        })
    }

    // post = (url:string, options: Options = {}) => {
    //     return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    // };

    // put = (url:string, options: Options = {}) => {
    //     return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    // };

    // delete = (url:string, options: Options = {}) => { 
    //     return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    // };

    // request = (url:string, options: Options = {}, timeout = 5000) => {
    //     const {headers = {}, method, data} = options;

    //     return new Promise(function(resolve, reject) {
    //         if (!method) {
    //             reject('No method');
    //             return;
    //         }

    //         const xhr = new XMLHttpRequest();
    //         xhr.open(method,url);
    //         Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
        
    //         xhr.onload = function() {
    //             resolve(xhr);
    //         };
    //         xhr.onabort = reject;
    //         xhr.onerror = reject;
    //         xhr.timeout = timeout;
    //         xhr.ontimeout = reject;
            
    //         if (method === "GET" || !data) {
    //             xhr.send();
    //         } else {
    //             xhr.send(data);
    //         }
    //     });
    // };
    
}