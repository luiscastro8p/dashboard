import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class OnboardingService {

    constructor(
        private http: HttpClient
    )    {
     }
     
    getRegister() {
        return this.http.get<any[]>('/api/onboarding');
    }
    getRegisterid(id) {
        return this.http.get<any[]>('/api/onboarding/'+id);
    }
    saveRegister(item) {
            return this.http.put<any[]>('/api/onboarding/'+item.id, item);
    }
    create(item){
        return this.http.post<any[]>('/api/onboarding/',item);
    }
    deleteInvoice(id) {
        return this.http.delete<any[]>('/api/onboarding/'+id);
    }

}