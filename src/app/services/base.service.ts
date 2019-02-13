import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { UserStore, UserState } from '../stores/user-store.service';
import { catchError, retryWhen } from 'rxjs/operators';

@Injectable()
export abstract class BaseService {
    constructor(protected http: HttpClient, private store: UserStore) {
        this.store$ = store.model.data$;
    }

    protected store$: Observable<UserState>;

    protected get user(): UserState {
        return this.store.model.get();
    }

    protected get headers(): HttpHeaders {
        if (this.user.token !== '') {
            return new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': `Bearer ${this.user.token}`
            });
        } else {
            return new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
            });
        }
    }

    get<T>(url: string): Observable<T> {
        return this.http.get<T>(url, { headers: this.headers }).pipe(catchError((err, obs) => this.catch(err, obs)));

        // return this.http.get<T>(url, { headers: this.headers }).pipe(retryWhen((err) => this.retry(err)));
    }

    post<T>(url: string, body: any): Observable<T> {
        return this.http.post<T>(url, body, { headers: this.headers }).pipe(catchError((err, obs) => this.catch(err, obs)));
    }

    put<T>(url: string, body: any): Observable<T> {
        return this.http.put<T>(url, body, { headers: this.headers }).pipe(catchError((err, obs) => this.catch(err, obs)));;
    }

    delete<T>(url: string, body: any): Observable<T> {
        return this.http.delete<T>(url, { headers: this.headers }).pipe(catchError((err, obs) => this.catch(err, obs)));;
    }

    private catch(err, obs): Observable<any> {
        if (err.status === 401) {
            this.store.update({ name: '', mail: '', token: '' });
        }
        // console.warn(err);
        return throwError(err);
    }

    private retry(err): Observable<any> {
        if (err.status === 401) {
            // chercher nouveau token
            return of(err);
        } else {
            return throwError(err);
        }
    }
}

