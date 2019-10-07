import { Email } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private readonly baseUrl = 'http://10.218.75.164:8088/mail/';
  // private readonly baseUrl = 'http://10.218.75.164:8089/testcors/';
  // email: Email;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
    }),
    withCredentials: false
  };

    // CORS_ORIGIN_WHITELIST = (
    //   'http://localhost:4200');

  constructor(private httpClient: HttpClient) { }

  postEmailPlaintext(data): Observable<FormData> {
    return this.httpClient.post<FormData>(`${this.baseUrl}plaintext`, data, this.httpOptions);
  }

  // getEmailPlaintext(data): Observable<Email> {
  //   return this.httpClient.post<Email>(`${this.baseUrl}`, data, this.httpOptions);
  // }

  postEmailPlaintextWithAtt(data): Observable<FormData> {
    // tslint:disable-next-line: max-line-length
    return this.httpClient.post<FormData>(`${this.baseUrl}plaintext/attachment?emailDetails=${JSON.stringify(data)}`, data, this.httpOptions);
  }
  getEmailHTML(data): Observable<Email> {
    return this.httpClient.post<Email>(`${this.baseUrl}/html`, data);
  }
  getEmailHTMLAtt(data): Observable<Email> {
    return this.httpClient.post<Email>(`${this.baseUrl}html/attachment`, data);
  }


}
