import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Observable, timer, Subscription } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { RoomModel } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-top',
  templateUrl: './room-top.component.html',
  styles: []
})
export class RoomTopComponent implements OnInit, OnDestroy {


  private obs: Subscription;
  rooms: Array<any> = null;

  constructor(private rs: RoomService) { }

  ngOnInit() {
    /*this.obs = timer(0, 10000).pipe(
      mergeMap(() => this.rs.getRooms()
        .pipe(map(t => t.sort((a, b) => a.name < b.name ? -1 : 1).slice(0, 5)))
      )
    ).subscribe(
      x => this.rooms = x,
      err => console.error(err)
    );*/

    /*this.obs = timer(0, 10000).pipe(
      mergeMap(() => this.rs.getRooms()
      )
    ).subscribe(
      x => this.rooms = x.reduce((memo, item) => {
        return memo.price + item.price;
      }),
      err => console.error(err)
    );*/


    /*this.rs.getRooms().subscribe(
      x => this.rooms = x,
      err => console.error(err),
      () => console.log('fin observable')
    );*/
    /*    this.rooms = [
          { name: 'Calliope', image: 'Calliope.jpg' },
          { name: 'Thalie', image: 'Thalie.jpg' },
          { name: 'Calliope', image: 'Calliope.jpg' },
          { name: 'Thalie', image: 'Thalie.jpg' }
        ];*/
  }

  ngOnDestroy(): void {
    this.obs.unsubscribe();
  }

}
