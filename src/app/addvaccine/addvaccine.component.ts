import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-addvaccine',
  templateUrl: './addvaccine.component.html',
  styleUrls: ['./addvaccine.component.css']
})
export class AddvaccineComponent implements OnInit {

  constructor(public userService: UserService) { }
  submitted: boolean;
  showSucessMessage: boolean=false;
  formControls = this.userService.form.controls;

  form = new FormGroup({
    $key : new FormControl(null),
    name : new FormControl('', Validators.required),
    dob : new FormControl('', [Validators.required]),
    vaccination : new FormControl('', Validators.required),
    dateAdministered : new FormControl('', Validators.required),
    brandName : new FormControl('', Validators.required),
    givenAt : new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.putUsersFromDB(this.form.value);
    this.showSucessMessage = true;
    // console.log(this.form.value);
    // console.log("component");
  }

}
