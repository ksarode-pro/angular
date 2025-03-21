import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";
import { EMPLOYEE_DATA } from '../assets/employee';
import { User } from './common/custom_types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, UserComponent, TaskComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
    alert("Add Task Event" + user.Name);
    $("#addTaskModal").show();
  }
}
