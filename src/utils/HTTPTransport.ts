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
            data
        });
    };

    public put<Response = void>(path:string, data: unknown):Promise<Response> {
        return this.request<Response>(this.endpont + path, {
            method: METHODS.PUT,
            data
        });
    };

    public patch<Response = void>(path:string, data: unknown):Promise<Response> {
        return this.request<Response>(this.endpont + path, {
            method: METHODS.PATCH,
            data
        });
    };

    public delete<Response>(path:string, data: unknown):Promise<Response> {
        return this.request<Response>(this.endpont + path, {
            method: METHODS.DELETE,
            data
        });
    };

    private request<Response>(url:string, options: Options = {method:METHODS.GET}):Promise<Response> {
        const {method, data} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onreadystatechange = () => {
                if(xhr.readyState === XMLHttpRequest.DONE){
                    if (xhr.status < 400) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            xhr.onabort = () => reject({reason: 'abort'});
            xhr.onerror = () => reject({reason: 'network error'});
            xhr.ontimeout = () => reject({reason: 'timeout'});

            xhr.withCredentials = true;
            xhr.responseType = 'json';

            if(method === METHODS.GET || !data) {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send();
            } else if(data instanceof FormData){
                xhr.send(data);
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(data));
            }
        })
    }
   
}