import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomDetailComponent } from './room/room-detail/room-detail.component';
import { RoomCreateComponent } from './room/room-create/room-create.component';
import { NotfoundComponent } from './home/notfound/notfound.component';

const ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'notfound', component: NotfoundComponent },
    {
        path: 'rooms', children: [
            // { path: 'list', component: RoomListComponent, outlet: 'bob' },
            { path: 'list', component: RoomListComponent },
            { path: 'detail/:id', component: RoomDetailComponent },
            { path: 'create', component: RoomCreateComponent }
        ]
    },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: '**', redirectTo: 'notfound' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [RouterModule]
})
export class AppRouterModule { }
