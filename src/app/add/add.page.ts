import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {

  name: string = '';

  constructor(private router: Router, private stateService: StateService) { }

  addState() {
    // Trim the state name and check if it's not empty
    const trimmedName = this.name.trim();
    if (trimmedName) {
      // Create the state object with the trimmed name
      const state = { name: trimmedName };

      // Call the addState method of the StateService
      this.stateService.addState(state)
        .then((data: any) => {
          console.log('State added successfully:', data);
          this.router.navigate(['home']); // Navigate to home page after successful addition
        })
        .catch((error: any) => {
          console.error('Error adding state:', error);
          // Handle error (e.g., show error message to user)
        });
    } else {
      // Handle case where name is blank (e.g., show error message to user)
    }
  }
}
