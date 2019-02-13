import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {



    login(username: string, password: string): Observable<any> {
        return this.post<any>(environment.urlAuth, { username, password, grant_type: 'password' });
    }
}
