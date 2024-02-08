import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  id: any='';
  name: any='';
  state: any;


  constructor(private router: Router, private route: ActivatedRoute, private stateService: StateService) {
    this.id = this.route.snapshot.params['id'];
    this.getState(this.id);
  }

  ngOnInit() {
  }

  getState(id: any) {
    this.stateService.getState(id).then(data => {
      this.state=data;
      this.name=this.state.Name;
      this.state=this.state.Course;
    });
  }

  update() {
    this.router.navigate(['update', {is: this.id, Name: this.name, State: this.state}]);
  }

  delete() {
    if(confirm("Are you sure you want to delete student from database?")) {
      this.stateService.deleteState(this.id);
    }
    this.router.navigate(['home']);
  }

}
