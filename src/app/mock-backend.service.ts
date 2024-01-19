import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockBackendService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1' },
      { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2' },
    ];

    return { users };
  }
}
