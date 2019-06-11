import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './pb-list/phone-list/phone-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgxPaginationModule}  from  'ngx-pagination';
import { PhoneEditComponent } from './pb-edit/phone-edit/phone-edit.component';
import { PlaceEditComponent } from './place-edit/place-edit/place-edit.component';
import { AdminComponent } from './admin/admin.component' ; 



@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneEditComponent,
    PlaceEditComponent,
    AdminComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
