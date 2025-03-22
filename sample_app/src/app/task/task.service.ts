import { TASKS_DATA } from "../../assets/tasks";
import { Task } from "../common/custom_types";
import { Injectable } from "@angular/core";

// Injectable decorator to make TaskService injectable
@Injectable({ providedIn: 'root' })
export class TaskService {
    tasks = TASKS_DATA;

    constructor() {
        let tasksFromLocalStorage = localStorage.getItem('ng-tasks');
        if(tasksFromLocalStorage)
        {
            this.tasks = JSON.parse(tasksFromLocalStorage);
        }
    }

    saveTasksToLocalStorage() {
        localStorage.setItem('ng-tasks', JSON.stringify(this.tasks));
    }

    getUserTasks(userId: number): Task[] {
        return this.tasks.filter(t => t.UserId === userId);
    }

    finishTask(task: Task) {
        let completed_tasks = this.tasks.find(t => t.Id == task.Id)!;
        completed_tasks.Status = "Completed";
        this.saveTasksToLocalStorage();
    }

    addNewTask(taskData: Task, userId: number) {
        taskData.UserId = userId;
        this.tasks.push(taskData);
        this.saveTasksToLocalStorage();
    }
}