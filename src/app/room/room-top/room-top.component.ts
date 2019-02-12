import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-top',
  templateUrl: './room-top.component.html',
  styles: []
})
export class RoomTopComponent implements OnInit {

  rooms: Array<any> = null;

  constructor() { }

  ngOnInit() {
    this.rooms = [
      { name: 'Calliope', image: 'Calliope.jpg' },
      { name: 'Thalie', image: 'Thalie.jpg' },
      { name: 'Calliope', image: 'Calliope.jpg' },
      { name: 'Thalie', image: 'Thalie.jpg' }
    ];
  }

}
