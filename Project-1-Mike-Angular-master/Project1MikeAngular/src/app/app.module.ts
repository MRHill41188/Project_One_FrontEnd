import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/Forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { UserComponent } from './Component/user/user.component';
import { ManagerComponent } from './Component/manager/manager.component';
import { TableComponent } from './Component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ManagerComponent,
    TableComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
