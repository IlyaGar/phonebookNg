import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneListComponent } from './pb-list/phone-list/phone-list.component';
import { PhoneEditComponent } from './pb-edit/phone-edit/phone-edit.component';
import { PlaceEditComponent } from './place-edit/place-edit/place-edit.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/phones', pathMatch: 'full' },
  { path: 'phones', component: PhoneListComponent},
  //{ path: 'phones-edit', component: PhoneEditComponent},
  //{ path: 'places-edit', component: PlaceEditComponent},
  { path: 'admin', component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
