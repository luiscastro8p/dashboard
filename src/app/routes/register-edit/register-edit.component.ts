import { DataRegisterService } from './../../Services/register.service';


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-register-edit',
  templateUrl: './register-edit.component.html',
  styleUrls: ['./register-edit.component.scss']
})
export class RegisterEditComponent implements OnInit {
id;
  formregister: FormGroup;

  constructor(public serviceRegister:DataRegisterService,private route: ActivatedRoute,private router: Router) { 

    this.formregister = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.required]),
      role: new FormControl("", [ Validators.required]),
      status: new FormControl(false),
      prm1: new FormControl(false),
      prm2: new FormControl(false),
      prm3: new FormControl(false),
      prm4: new FormControl(false),


    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.id = id;
    console.log(id);
    if(this.id !== 'new'){
      this.serviceRegister.getRegisterid(id).subscribe((item:any) => {
        console.log(item);
        this.formregister.setValue({
          id:item.id,
          name:item.name,
          email:item.email,
          password:"ejele",
          status:item.status,
          role:item.role,
          prm1:item.prm1,
          prm2:item.prm2,
          prm3:item.prm3,
          prm4:item.prm4,   
        })
      })

    }
  }
  submitForm(value){
    if(this.id){
      this.serviceRegister.saveRegister(value).subscribe(item => {
        this.router.navigate(["/Registro"]);

      })
    }else{
      this.serviceRegister.saveRegister(value).subscribe(item => {
        this.router.navigate(["/Registro"]);
      })
    }
    console.log(value)
    // let obj = {
    //   name: value.name,
    //   email: value.email,
    //   role: value.role,
    //   status: value.status
    // }
  
    
  }
}
