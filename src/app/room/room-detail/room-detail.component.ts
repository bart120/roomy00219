import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { RoomModel } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styles: [`card{width: 50%;}`]
})
export class RoomDetailComponent implements OnInit {

  room: RoomModel = null;
  constructor(private route: ActivatedRoute, private rs: RoomService) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.rs.getRoom(id).subscribe(
      data => this.room = data,
      err => console.log(err)
    );
  }

}
