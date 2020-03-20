import { Component, OnInit } from '@angular/core';
import { OnboardingService } from '../../Services/onboarding.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  
  timeout: any;
  listregister = [];
  constructor(public serviceregister: OnboardingService) {}

  ngOnInit() {
    this.serviceregister.getRegister().subscribe(item => {
      this.listregister = item;
    });
  }
  delete(value) {
    
   this.serviceregister.deleteInvoice(value.id).subscribe(item => {
    this.serviceregister.getRegister().subscribe(item => {
      this.listregister = item;
    });
   })
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {}, 100);
  }

}
