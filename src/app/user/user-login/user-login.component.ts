import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private route: Router) { }

  loginForm = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    passWord: new FormControl('',[Validators.required]),
  });

  ngOnInit(): void {
  }

  goto(path: any){
    this.route.navigate([`/${path}`]);
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
  }
  
}
