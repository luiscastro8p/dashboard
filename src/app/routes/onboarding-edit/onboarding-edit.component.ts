import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OnboardingService } from '../../Services/onboarding.service';


@Component({
  selector: 'app-onboarding-edit',
  templateUrl: './onboarding-edit.component.html',
  styleUrls: ['./onboarding-edit.component.scss']
})
export class OnboardingEditComponent implements OnInit {

  id;
  formregister: FormGroup;
  listregister = [];
  constructor(public serviceRegister:OnboardingService,private route: ActivatedRoute,private router: Router) { 

    this.formregister = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.required),
      sms: new FormControl("", [ Validators.required]),
      alcance: new FormControl("", [Validators.required]),
    });
  }
  ngOnInit() {
    this.serviceRegister.getRegister().subscribe(item => {
      this.listregister = item;
      console.log(item);
    });
    const id = this.route.snapshot.paramMap.get("id");
    this.id = id;
    if(this.id !== 'new'){
      this.serviceRegister.getRegisterid(id).subscribe((item:any) => {
        console.log(item);
        this.formregister.setValue({
          id:item.id,
          name:item.name,
          sms:item.sms,
          alcance:item.alcance,
        })
      })

    }
  }
  submitForm(value){
    if(this.id !== 'new'){
      this.serviceRegister.saveRegister(value).subscribe(item => {
        this.router.navigate(["/user"]);

      })
    }else{
      const id = Number(this.listregister.length)
      let obj = {
        id:this.listregister.length + 1 ,
        name:value.name,
        sms:value.sms,
        alcance:value.alcance,

      }
      this.serviceRegister.create(obj).subscribe(item => {
        this.router.navigate(["/onboarding"]);
      })
    }    
  }
}
