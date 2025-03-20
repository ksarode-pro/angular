import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { Task } from '../../common/custom_types';

@Component({
  selector: 'app-task-list',
  imports: [NgIf, NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input({ required: true }) task!: Task;
}

