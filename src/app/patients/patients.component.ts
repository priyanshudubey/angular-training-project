import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  constructor(public userService: UserService) { }
  submitted: boolean=false;
  showSucessMessage: boolean=false;
  formControls = this.userService.form.controls;


form = new FormGroup({
    $key : new FormControl(null),
    name : new FormControl('', Validators.required),
    dob : new FormControl('', [Validators.required]),
    gender : new FormControl('', Validators.required),
    birthPlace : new FormControl('', Validators.required),
    bloodGroup : new FormControl('', Validators.required),
    height : new FormControl('', Validators.required),
    weight : new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  onSubmit(){
      this.userService.putUsersFromDB(this.form.value);
      console.log(this.form.value);
      this.showSucessMessage = true;
      this.submitted = true;
      console.log("component");
    }
  }
