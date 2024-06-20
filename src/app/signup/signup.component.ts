import { Component} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';




interface CoachData{
  email: string;
  uname: string;

}
interface UserData{
  email: string;
  uname: string;

 }

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  
 signupType: string =''  ;

  userregisterForm = new FormGroup({
 
    uname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
    password:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    mobileNumber:new FormControl('',[ Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]),
    speciality:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]),
  })



  constructor(private fb:FormBuilder,
              private route:ActivatedRoute,
              
  ){ }

  ngOnInit(): void{
    this.route.data.subscribe(data => {
      this.signupType = data ['type'];
    });
  }

  
}
 


