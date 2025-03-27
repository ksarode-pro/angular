import { NgModule } from "@angular/core";
import { TaskComponent } from "./task.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shadow/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TaskComponent, TaskListComponent, AddTaskComponent],
    exports: [TaskComponent],
    imports: [CommonModule, SharedModule, FormsModule]
})
export class TaskModule {}