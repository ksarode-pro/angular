import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { TaskListComponent } from "./task-list/task-list.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { Task, User } from '../common/custom_types';
import { TASKS_DATA } from '../../assets/tasks';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  imports: [TaskListComponent, NgIf, NgFor, AddTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({ required: true }) user!: User;
  @Output() addTaskEvent = new EventEmitter();
  tasks: Task[] = TASKS_DATA;
  
  //taskService: TaskService;
  
  // Injecting TaskService
  // constructor(taskService: TaskService) {
  //   this.taskService = taskService;
  // }

  // Injecting TaskService : Alternative way
  taskService: TaskService = inject(TaskService);

  get getUserTasks()
  {
    return this.taskService.getUserTasks(this.user.Id);
  }

  onFinishTask(task: Task) {
    this.taskService.finishTask(task);
  }

  addTaskModalOpen() {
    this.addTaskEvent.emit(this.user);
  }

  addNewTask(taskData: Task) {
    this.taskService.addNewTask(taskData, this.user.Id);
  }
}