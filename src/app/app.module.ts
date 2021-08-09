import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { DragndropDirective } from './components/dragndrop.directive';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';
import { DetailsuploadComponent } from './components/detailsupload/detailsupload.component';
import { ListuploadComponent } from './components/listupload/listupload.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    ForgotpassComponent,
    DragndropDirective,
    UploadfileComponent,
    DetailsuploadComponent,
    ListuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
