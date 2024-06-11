import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

type: any;
constructor(private route:ActivatedRoute){}
ngOnInIt():void{
  this.route.data.subscribe(data=>{
    this.type=data['type'];
  });
}

regForm = new FormGroup({
 
  uname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
  password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
  mobileNumber:new FormControl('',[ Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]),
  speciality:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]),


})
}



