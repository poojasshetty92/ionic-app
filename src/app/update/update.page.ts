import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  id: any;
  name: any = '';
  state: any = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
      console.log('ID:', this.id); // Log the ID to verify it's being retrieved correctly
    });
  }
  updateState() {
    if (this.state !== '') {
      let stateData = {
        "name": this.state,
        "id": "65b8c56f25dd0a71b0aa2fe2"  // Remove quotation marks to correctly include the value of the id property
      };
  
      this.stateService.updateState(stateData)
        .then(() => {
          this.router.navigate(['home']);
        })
        .catch(error => {
          console.error('Error updating state:', error);
          // Handle error if needed
        });
    }
  }
}
