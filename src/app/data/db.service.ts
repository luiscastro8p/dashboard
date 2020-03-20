import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DataDB } from './register';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      'Register': DataDB.Register,
      'Account': DataDB.Account,
      'Notification':DataDB.Notification

    };
  }
}
