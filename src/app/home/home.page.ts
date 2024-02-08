import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
stateList: any;

  constructor(private router: Router, private stateService: StateService) {
    this.getStates();
  }

  getStates() {
    this.stateService.getStates().then(data => {
      this.stateList=data;
    })
  }

  view(id: any) {
    this.router.navigate(['view', {id: id}]);
  }

  add() {
    this.router.navigate(['add']);
  }
}