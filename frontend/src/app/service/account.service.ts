import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Account } from '../model/account';
import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class AccountService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private usersUrl = environment.urlPath + '/users';
  private regUrl = environment.urlPath + "/register";
  private logUrl = environment.urlPath + "/login";

  constructor(
    private http: HttpClient) {
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.usersUrl)
      .pipe(
        catchError(this.handleError<Account[]>('getAccounts', []))
      );
  }

  getAccount(id: number): Observable<Account> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<Account>(url).pipe(
      catchError(this.handleError<Account>(`getAccount id=${id}`))
    );
  }

  changeAccountStatus(id: number): Observable<Account> {
    const url = `${this.usersUrl}/${id}/admin`;
    return this.http.get<Account>(url).pipe(
      catchError(this.handleError<Account>(`getAccount id=${id}`))
    );
  }

  updateAccount(account: Account): Observable<any> {
    const url = `${this.usersUrl}/${account.id}`
    return this.http.put(url, account, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateAccount'))
    );
  }

  regAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.regUrl, account, this.httpOptions).pipe(
      catchError(this.handleError<Account>('regAccount'))
    );
  }

  logAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(this.logUrl, account, this.httpOptions).pipe(
      catchError(this.handleError<Account>('logAccount'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
