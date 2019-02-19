import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

/**
 * REST API
 */
@Injectable()
export class Api {
  //url: string = 'https://example.com/api/v1';
  //url: string = 'http://localhost/api-axes-slim';
  url: string = 'http://192.168.0.6/api-axes-slim';
  //url: string = "http://192.168.20.179/api-axes-slim";
  //url: string = 'http://192.168.42.186/api-axes-slim';

  headerAuth: any;

  constructor(public http: HttpClient) {}

  // exemplo de string concatenada sem precisar do "+",  usa-se o `(crase) para iniciar e fechar a string.
  // `/servico/${variavel}?api_key=`

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + "/" + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    //return this.http.post(this.url + "/" + endpoint, body, reqOpts);
    //return this.http.post(this.url + "/" + endpoint, body, {withCredentials: true});

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    //headers = headers.set('Authorization', 'Basic ' + btoa(reqOpts.usuario+':'+reqOpts.senha));
    return this.http.post(this.url + "/" + endpoint, body, {headers});
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + "/" + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + "/" + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + "/" + endpoint, body, reqOpts);
  }
}
