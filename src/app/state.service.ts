import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StateService {

  apiBaseUrl:string='';

  constructor(public http: HttpClient) {
    this.apiBaseUrl = 'http://15.207.84.40:3000/';
  }

  getState(USN: any) {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl + 'states/' + identity).subscribe((data) => {
        resolve(data);
      })
    });
  }

  getStates() {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl+'states/').subscribe(data => {
        resolve(data);
      })
    });
  }

  addState(state: any) {
    return new Promise(resolve => {
      this.http.post(this.apiBaseUrl+'states/', state).subscribe(data => {
        resolve(data);
      })
    });
  }

  updateState(USN: any, state: any) {
    return new Promise(resolve => {
      this.http.put(this.apiBaseUrl+'states/'+identity, state).subscribe(data => {
        resolve(data);
      })
    });
  }

  deleteState(USN: any) {
    return new Promise(resolve => {
      this.http.delete(this.apiBaseUrl+'states/'+identity).subscribe(data => {
        resolve(data);
      })
    });
  }
}
