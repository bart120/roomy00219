import { Component, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styles: [`table{width: 100%};`]
})
export class RoomListComponent implements OnInit {

  rooms: Array<RoomModel>;
  displayedColumns = ['name', 'seatCount', 'price', 'pricedevise', 'actions'];

  constructor(private rs: RoomService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit() {
    this.rs.getRooms().subscribe(
      data => this.rooms = data,
      err => this.snack.open(err.message, 'OK', { duration: 4000 }) // console.error(err)
    );
  }

  detail(room: RoomModel) {
    this.router.navigate(['/rooms/detail', room.id]);
  }

}
