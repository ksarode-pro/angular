import { Component, Input } from '@angular/core';
import { EMPLOYEE_DATA } from '../../assets/employee';
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) user!: any;
}
