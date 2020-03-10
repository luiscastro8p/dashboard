import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../../shared/colors/colors.service';

import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
    
    constructor() {
    
    }

    ngOnInit() { }

}
