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
  listregister = [];
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
    this.serviceRegister.getRegister().subscribe(item => {
      this.listregister = item;
      console.log(item);
    });
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
    if(this.id !== 'new'){
      this.serviceRegister.saveRegister(value).subscribe(item => {
        this.router.navigate(["/Registro"]);

      })
    }else{
      const id = Number(this.listregister.length)
      let obj = {
        id:this.listregister.length + 1 ,
        name:value.name,
        email:value.email,
        role:value.role,
        status:value.id,
        prm1:value.prm1,
        prm2:value.prm2,
        prm3:value.prm3,
        prm4:value.prm4
      }
      console.log(obj)
      this.serviceRegister.create(obj).subscribe(item => {
        this.router.navigate(["/Registro"]);
      })
    }

    let obj = {
      name: value.name,
      email: value.email,
      role: value.role,
      status: value.status
    }
  
    
  }
}
