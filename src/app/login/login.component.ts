import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginTitle: string='';
  loginForm: FormGroup;
  userForm: FormGroup;

  constructor(private fb:FormBuilder,
    private route:ActivatedRoute,private loginservice:LoginService){

      this.loginForm = this.fb.group({

        coachid:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]

      })

      this.userForm = this.fb.group({

        userid :['',[Validators.required]],
        password1:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]]
      
      })

  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.loginTitle = data ['type'];
    });
  }
    
  loginCoach(){
    console.log(this.loginForm.value['coachid'])
    this.loginservice.getCoach().subscribe(res=>{
      const coach1 = res.find((a:any)=>{
        console.log(a)
        return a.id === this.loginForm.value.coachid &&  a.password === this.loginForm.value.password
      });
      console.log();
      if(coach1){
        alert("login Success");
      }else{
        alert("coach not found");
      }
      console.log(res);
     
    },err=>{
      alert("something went wrong")
    })
  }
 
  loginUser(){
    this.loginservice.getUser().subscribe(response=>{
      console.log(response);
    },
     error=>{
      console.error('Error registering coach',error);
      alert('error registering coach');
    });
  
  }
}

