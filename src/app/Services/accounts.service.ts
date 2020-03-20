import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataAccountsService {

    constructor(
        private http: HttpClient
    )    {
     }


    getRegister() {
        return this.http.get<any[]>('/api/Account');
    }
    getRegisterid(id) {
        return this.http.get<any[]>('/api/Account/'+id);
    }
    saveRegister(item) {
            return this.http.put<any[]>('/api/Account/'+item.id, item);
    }
    create(item){
        return this.http.post<any[]>('/api/Account/',item);
    }

    deleteInvoice(id) {
        return this.http.delete<any[]>('/api/Account/'+id);
    }
    getMails() {
        return this.http.get<any[]>('/api/Account');
    }
    getCountries() {
        return this.http.get<any[]>('/api/Account');
    }
    getProducts() {
        return this.http.get<any[]>('/api/Account');
    }
}