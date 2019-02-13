import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RoomListComponent } from './room/room-list/room-list.component';
import { RoomDetailComponent } from './room/room-detail/room-detail.component';
import { RoomCreateComponent } from './room/room-create/room-create.component';
import { NotfoundComponent } from './home/notfound/notfound.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent, data: { breadcrumbs: ['dashboard'] } },
    { path: 'notfound', component: NotfoundComponent },
    {
        path: 'rooms', children: [
            // { path: 'list', component: RoomListComponent, outlet: 'bob' },
            { path: 'list', component: RoomListComponent, data: { breadcrumbs: ['dashboard', 'salles'] } },
            {
                path: 'detail/:id', component: RoomDetailComponent,
                data: { breadcrumbs: ['dashboard', 'salles', 'detail'] },
                canActivate: [AuthenticationGuard]
            },
            { path: 'create', component: RoomCreateComponent, data: { breadcrumbs: ['dashboard', 'salles', 'ajouter'] } }
        ]
    },
    {
        path: 'authentication', children: [
            { path: 'login', component: LoginComponent, data: { breadcrumbs: ['authentification', 'login'] } },
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
