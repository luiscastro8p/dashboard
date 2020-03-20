import { DataAccountsService } from './../../Services/accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  timeout: any;
  list = [];
  listuser = []
  data:any = {}
  detail:any ={}
  reading: any = []
  allpagos: any = []
  constructor( public serviceAccount: DataAccountsService) { }

  ngOnInit() {
    this.serviceAccount.getRegister().subscribe(item => {
      this.list = item;
      console.log(item);
    });
  }
  delete(value) {
    
   this.serviceAccount.deleteInvoice(value.id).subscribe(item => {
    this.serviceAccount.getRegister().subscribe(item => {
      this.list = item;
      console.log(item);
    });
   })
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {}, 100);
  }
  show(id){
    this.serviceAccount.getRegisterid(id).subscribe((item:any) => {
     this.data = item
     this.detail = item.lastpayment
     this.reading =  item.detail.reading
     this.allpagos =  item.detail.pagos
      console.log(this.allpagos);
      
    })
  }
}