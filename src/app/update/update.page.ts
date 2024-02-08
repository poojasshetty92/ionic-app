import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  id: any='';
  name: any='';
state:  any='';

  constructor(private router:Router, private route: ActivatedRoute, private stateService: StateService) {
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['Name'];
    this.state = this.route.snapshot.params['State'];
    console.log(this.id, this.name);
  }

  ngOnInit() {
  }

  updateState() {
    let state = {
      id: this.id,
      Name: this.name,
    State: this.state
    };
    if(this.state!=''){
      this.stateService.updateState(this.id, state);
    }
    this.router.navigate(['home']);
  }
}
