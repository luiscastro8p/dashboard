import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataRegisterService {

    constructor(
        private http: HttpClient
    )    {
     }


    getRegister() {
        return this.http.get<any[]>('/api/Register');
    }
    getRegisterid(id) {
        return this.http.get<any[]>('/api/Register/'+id);
    }
    saveRegister(item) {
       
            return this.http.put<any[]>('/api/Register/'+item.id, item);
     
           
   
    }
    create(item){
        return this.http.post<any[]>('/api/Register/',item);
    }

    deleteInvoice(id) {
        return this.http.delete<any[]>('/api/Register/'+id);
    }
    getMails() {
        return this.http.get<any[]>('/api/Register');
    }
    getCountries() {
        return this.http.get<any[]>('/api/Register');
    }
    getProducts() {
        return this.http.get<any[]>('/api/Register');
    }
}