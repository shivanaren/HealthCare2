import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SignupServiceService } from '../signup-service.service';

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
export class SignupComponent implements OnInit {
  
  signupType: string =''  ;


  userregisterForm: FormGroup;
  userregisterform1: FormGroup;
  coachId:any;
  userId:any;

  constructor(private fb:FormBuilder,
    private route:ActivatedRoute,
    private signupservice: SignupServiceService){ 
      this.userregisterForm = this.fb.group({
    
     uname:['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
     password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
     mobileNumber:['',[ Validators.required, Validators.pattern(/^\d{10}$/)]],
     speciality:['',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]],
  })

  this.userregisterform1 = this.fb.group({
  
    uname1: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
    password1: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    mobileNumber1: ['',[ Validators.required, Validators.pattern(/^\d{10}$/)]],
    email: ['',[Validators.required,Validators.email]],
    pincode: ['',[Validators.required,Validators.pattern(/^\d{6}$/)]],
    city: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    state:['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    country: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]]
  })
}

  ngOnInit(): void{
    this.route.data.subscribe(data => {
      this.signupType = data ['type'];
    });
  }
  
  isCoachRegistrationsuccessful = false;
  isUserRegistrationsuccessful = false;

  coachregister(){
    if (this.userregisterForm.valid){
      this.signupservice.registerCoach(this.userregisterForm.value).subscribe(response =>{
        console.log('coach registered successfully',response);
        alert('coach registered successfully:' + response.id);
        this.isCoachRegistrationsuccessful = true;
        this.coachId = response.id;
       },
       error =>{
         console.error('Error registering coach',error);
          alert('error registering coach');
        });   
    
      };
    }

userregister(){
  debugger
  if (this.userregisterform1.valid){
    this.signupservice.registerUser(this.userregisterform1.value).subscribe(response =>{
      console.log('user registered successfully',response);
      alert('user registered successfully:' + response.id);
      this.isUserRegistrationsuccessful = true;
      this.userId = response.id;
    },
    error =>{
      console.error('Error registering user',error);
       alert('error registering user');
    })   
  }
  
}  

}
  

 


