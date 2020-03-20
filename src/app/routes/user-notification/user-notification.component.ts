import { Component, OnInit } from '@angular/core';
import { UserNotificationService } from './../../Services/userNotification.service';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.scss']
})
export class UserNotificationComponent implements OnInit {

  timeout: any;
  listregister = [];
  constructor(public serviceregister: UserNotificationService) {}

  ngOnInit() {
    this.serviceregister.getRegister().subscribe(item => {
      this.listregister = item;
      console.log(item);
    });
  }
  delete(value) {
    
   this.serviceregister.deleteInvoice(value.id).subscribe(item => {
    this.serviceregister.getRegister().subscribe(item => {
      this.listregister = item;
      console.log(item);
    });
   })
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {}, 100);
  }

}
