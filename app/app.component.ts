import {Component, OnInit} from 'angular2/core';
import {Task} from './task';
import {TaskService} from './task.service';

@Component({
  selector: 'my-app',
  template: `
        <div id="top-bar">
            <h2>Sprint Planner</h2>
        </div>
        <div id="menu-left">
            <h3>Projects/Sprints</h3>
            <ul>
                <li>Project 1</li>
                    <ul>
                        <li>Sprint 1</li>
                        <li>Sprint 2</li>
                        <li>Sprint 3</li>
                        <li>Sprint 4</li>
                    </ul>
                <li>Project 2</li>
                    <ul>
                        <li>Sprint 1</li>
                        <li>Sprint 2</li>
                        <li>Sprint 3</li>
                    </ul>
                <li>Project 3</li>
                    <ul>
                        <li>Sprint 1</li>
                        <li>Sprint 2</li>
                        <li>Sprint 3</li>
                        <li>Sprint 4</li>
                        <li>Sprint 5</li>
                    </ul>             
            </ul>
        </div>
        <div id="content">
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
        </div>
  `,
  styles: [`
        #top-bar { background-color: lime; height: 45px; width: 100%; position: fixed; text-align: center; z-index: 100; }
        #top-bar h2 { margin-top: 8px;}
        #menu-left { float: left; width: 200px; position: fixed; background-color: lightgrey; padding-top: 50px; margin-left: 20px; }
        #content { padding-top: 50px; margin-left: 250px; }
        .task-list { list-style-type: none; padding: 0; }
        .task-id { width: 50px; }
        .task-title { width: 300px; }
        .task-estimate { width: 120px; }
        .task-list-header, .task-item { text-align: left; }
  `],
  directives: [],
  providers: [TaskService]
})
export class AppComponent implements OnInit {
    public tasks: Task[];

    constructor(private _taskService: TaskService) {}
    
    getTasks() {
        this._taskService.getTasks().then(tasks => this.tasks = tasks);
    }
    
    ngOnInit() {
        this.getTasks();
    }
}
