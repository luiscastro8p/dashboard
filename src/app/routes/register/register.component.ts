import { DataRegisterService } from './../../Services/register.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  timeout: any;
  listregister = [];
  constructor(public serviceregister: DataRegisterService) {}

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
