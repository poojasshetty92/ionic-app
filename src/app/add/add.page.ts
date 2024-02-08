import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  id: any='';
  name: any='';

  constructor(private router: Router, private stateService: StateService) { }

  ngOnInit() {
  }
  addState() {
    let state = {
      id: this.id,
      Name: this.name
      
    };
    if(this.id!='' && this.name!='') {
      this.stateService.addState(state).then(data => {
        console.log(data);
      });
    }
    this.router.navigate(['home']);
  }


}
