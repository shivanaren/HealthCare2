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
    this.loginservice.getCoach().subscribe({next:(response)=>{
      console.log(response)
    },error:error=>{

    }})
  }

}
