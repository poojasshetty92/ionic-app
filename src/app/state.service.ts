import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  apiBaseUrl: string = 'http://15.207.84.40:3000/api/';

  constructor(public http: HttpClient) {}

getState(USN: any) {
  return new Promise(resolve => {
    this.http.get(this.apiBaseUrl + 'states/' + USN).subscribe((data: any) => {
      console.log('Server Response:', data); // Log the response data
      resolve(data.name); // Assuming the server response contains a 'name' property
    });
  });
}


  getStates() {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl + 'states/').subscribe(data => {
        resolve(data);
      });
    });
  }

  addState(state: any) {
    return new Promise(resolve => {
      this.http.post(this.apiBaseUrl + 'states/', state).subscribe(data => {
        resolve(data);
      });
    });
  }

  updateState(USN: any, state: any) {
    return new Promise(resolve => {
      this.http.put(this.apiBaseUrl + 'states/' + USN, state).subscribe(data => {
        resolve(data);
      });
    });
  }

  deleteState(USN: any) {
    return new Promise(resolve => {
      this.http.delete(this.apiBaseUrl + 'states/' + USN).subscribe(data => {
        resolve(data);
      });
    });
  }
}
