import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserNotificationService } from './../../Services/userNotification.service';


@Component({
  selector: 'app-user-notification-edit',
  templateUrl: './user-notification-edit.component.html',
  styleUrls: ['./user-notification-edit.component.scss']
})
export class UserNotificationEditComponent implements OnInit {

  id;
  formregister: FormGroup;
  listregister = [];
  constructor(public serviceRegister:UserNotificationService,private route: ActivatedRoute,private router: Router) { 

    this.formregister = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.required),
      job: new FormControl("", [ Validators.required]),
      phone: new FormControl("", [Validators.required]),
      notify: new FormControl("", [ Validators.required]),
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
          job:item.job,
          phone:item.phone,
          notify:item.notify
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
        job:value.job,
        role:value.role,
        phone:value.phone,
      }
      console.log(obj)
      this.serviceRegister.create(obj).subscribe(item => {
        this.router.navigate(["/user"]);
      })
    }    
  }
}
