import { Injectable } from '@angular/core';
import { RoomModel } from '../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Router } from '@angular/router';
import { UserStore } from '../stores/user-store.service';

@Injectable({ providedIn: 'root' })
export class RoomService extends BaseService {

    /*constructor(http: HttpClient, store: UserStore, router: Router) {
        super(http, store);
    }*/

    getRooms(): Observable<Array<RoomModel>> {
        // return this.client.get<Array<RoomModel>>(environment.urlRooms);
        return this.get<Array<RoomModel>>(environment.urlRooms);
    }

    getRoom(id: number): Observable<RoomModel> {
        return this.http.get<RoomModel>(`${environment.urlRooms}/${id}`);
        // return this.get<RoomModel>(`http://formation-roomy.inow.fr/api/news`);
    }
}
