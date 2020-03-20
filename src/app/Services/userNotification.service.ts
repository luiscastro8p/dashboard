import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserNotificationService {

    constructor(
        private http: HttpClient
    )    {
     }


    getRegister() {
        return this.http.get<any[]>('/api/Notification');
    }
    getRegisterid(id) {
        return this.http.get<any[]>('/api/Notification/'+id);
    }
    saveRegister(item) {
            return this.http.put<any[]>('/api/Notification/'+item.id, item);
    }
    create(item){
        return this.http.post<any[]>('/api/Notification/',item);
    }

    deleteInvoice(id) {
        return this.http.delete<any[]>('/api/Notification/'+id);
    }

}