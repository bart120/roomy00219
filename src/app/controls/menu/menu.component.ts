import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ['.active{background-color:lightblue;}']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
