import {Component, OnInit} from 'angular2/core';
import {Task} from './task';
import {TaskService} from './task.service';

/*
TODO:
Move service and html to task-list component
Create task-detail component
Link click event to an edit component
Dashboard component
*/

@Component({
    selector: 'task-list',
    template: `
        <h2>List of tasks</h2>
        <ul class="task-list">
            <li>
                <table class="task-list-header">
                    <tr>
                        <th class="task-id">ID</th>
                        <th class="task-title">Title</th>
                        <th class="task-estimate">Estimate (hrs)</th>
                    <tr>
                </table>
            </li>
            <li *ngFor="#task of tasks">
                <table class="task-item">
                    <tr>
                        <td class="task-id">{{task.id}}</td>
                        <td class="task-title">{{task.title}}</td>
                        <td class="task-estimate">{{task.estimate}}</td>
                    </tr>
                </table>
            </li>
        </ul>
    `,
    styles: [`
        .task-list { list-style-type: none; padding: 0; }
        .task-id { width: 50px; }
        .task-title { width: 300px; }
        .task-estimate { width: 120px; }
        .task-list-header, .task-item { text-align: left; }
        .task-item { background-color: silver; margin: 5px 0; }
    `]
})
export class TaskListComponent implements OnInit {
    public tasks: Task[];
    
    constructor(private _taskService: TaskService) {}

    getTasks() {
        this._taskService.getTasks().then(tasks => this.tasks = tasks);
    }
    
    ngOnInit() {
        this.getTasks();
    }
}