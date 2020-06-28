import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  members = [];
  selected_member = { id: 0, name: '', surname: '' };

  constructor(private api:ApiService, private router: Router){
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log("Aconteceu um erro!", error.message);
      }
    );
  };

  memberClicked = (member) => {
    this.router.navigate(['member-detail', member.id]);
  }

}
