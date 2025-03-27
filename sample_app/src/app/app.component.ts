import { Component } from '@angular/core';
import { EMPLOYEE_DATA } from '../assets/employee';
import { User } from './common/custom_types';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'TaskTrack';
  user: any;
  users = EMPLOYEE_DATA;

  get selectedUser() {
    return this.user;
  }

  onSelectedUser(user: any)
  {
    this.user = user;
  }

  onAddTaskEvent(user: User) {
    $("#addTaskModal").show();
  }
}
