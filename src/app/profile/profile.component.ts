import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forbiddenNameValidator, verifyPass } from '../forbidden.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private route:ActivatedRoute){
    this.route.queryParams.subscribe( params => console.log(params))
  }

  profileForm = new FormGroup({
    
    firstName:new FormControl< string | null>('',[Validators.required,Validators.minLength(3)]),
    lastName:new FormControl('', forbiddenNameValidator('alice')),
    email:new FormControl(),
    password:new FormControl(),
    password2:new FormControl(),

    address: new FormGroup({
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
    }),

    mobileNos: new FormArray([
      new FormControl()
    ])
  },{validators:[verifyPass]});



  get mobileNos():FormArray{
    return this.profileForm.get('mobileNos') as FormArray;
  }

  get firstName():FormControl{
    return this.profileForm.get('firstName') as FormControl;
  }
  get password2():FormControl{
    return this.profileForm.get('password2') as FormControl;
  }

  get lastName():FormControl{
    return this.profileForm.get('lastName') as FormControl;
  }

  addMobile():void{
    this.mobileNos.push(new FormControl());
  }

  UpdateFeilds():void{
    this.profileForm.patchValue({
      firstName:'Sumit',
      address:{city:'Pune'}
    })
  }

  onDataSubmit():void{
    console.log(this.profileForm.value);
    this.profileForm.reset();
    
  }

  }
