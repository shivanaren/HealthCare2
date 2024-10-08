import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { AppointmentsComponent } from './user/appointments/appointments.component';
import { CoachhomeComponent } from './coach/coachhome/coachhome.component';
import { CoachprofileComponent } from './coach/coachprofile/coachprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    UserhomeComponent,
    UserprofileComponent,
    AppointmentsComponent,
    CoachhomeComponent,
    CoachprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
