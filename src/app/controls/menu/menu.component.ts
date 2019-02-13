import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStore, UserState } from 'src/app/stores/user-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    .active{background-color:lightblue;}
    .flex-container{display: flex; justify-content: space-between; width:100%;}
  `]
})
export class MenuComponent implements OnInit {

  store$: Observable<UserState>;
  breadcrumbs: Array<string>;
  private subRoute;
  // private route: ActivatedRoute;

  constructor(private router: Router, private route: ActivatedRoute, private userStore: UserStore) {
    this.store$ = this.userStore.model.data$;
    // this.route = route;
  }

  ngOnInit() {

    this.subRoute = this.route.data.subscribe(
      x => { console.log(x); this.breadcrumbs = x.breadcrumbs as Array<string>; }
    );
  }

  logout(): void {
    this.userStore.update({ name: '', mail: '', token: '' });
    console.log(this.userStore.model.get());
    this.router.navigate(['']);
  }

  /*²ngOnDestroy(): void {
    this.subRoute.unsubcribe();
  }*/

}
