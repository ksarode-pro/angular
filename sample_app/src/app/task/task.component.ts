import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() addTaskEvent = new EventEmitter();
  tasks: Task[] = TASKS_DATA;

  get getUserTasks()
  {
    return this.tasks.filter(t => t.UserId === this.user.Id)
  }

  onFinishTask(task: Task) {
    let completed_tasks = this.tasks.find(t => t.Id == task.Id)!;
    completed_tasks.Status = "Completed";
  }

  addTask() {
    alert("Add Task");
    this.addTaskEvent.emit(this.user);
  }
}