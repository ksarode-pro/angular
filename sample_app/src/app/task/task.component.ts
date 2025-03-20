import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { TaskListComponent } from "./task-list/task-list.component";
import { Task, User } from '../common/custom_types';
import { TASKS_DATA } from '../../assets/tasks';

@Component({
  selector: 'app-task',
  imports: [TaskListComponent, NgIf, NgFor],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) user!: User;
  tasks: Task[] = TASKS_DATA;

  get getUserTasks()
  {
    return this.tasks.filter(t => t.UserId === this.user.Id)
  }
}
