import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.pattern('^[A-z]{4,}$')]),
    password:new FormControl('',[Validators.required])
  })
  flag=false

  ngOnInit(): void {
    
  }
  login(){
    console.log(this.loginForm.getRawValue());
    console.log(this.loginForm.value);
    
  }



}


