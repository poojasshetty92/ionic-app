import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  id: any;
  name: any = '';
  state: any = ''; // Initialize state to an empty string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['Name'] || ''; // Initialize name to an empty string if it's undefined
      console.log('ID:', this.id); // Log the ID to verify it's being retrieved correctly
    });
  }

  updateState() {
    if (this.state !== '') {
      let stateData = {
        name: this.state,
        id: this.id
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
