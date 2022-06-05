import { MaterialModule } from './Modules/Material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmpopupComponent } from './Utils/Components/confirmpopup/confirmpopup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/Templates/Shared/header/header.component';
import { HomeComponent } from './Components/Templates/Home/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllurlsComponent } from './Components/Pages/allurls/allurls.component';
import { LoginComponent } from './Components/Security/login/login.component';
import { RegisterComponent } from './Components/Security/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmpopupComponent,
    HeaderComponent,
    HomeComponent,
    AllurlsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
