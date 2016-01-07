import {Component} from '/angular2/core';

interface Task {
    id: number;
    title: string;
    estimate: number;
}

@Component({
  selector: 'my-app',
  template: `
        <h1>Sprint Planner</h1>
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
  `]
})
export class AppComponent {
    public tasks: Task[] = TASKS;
}

var TASKS: Task[] = [
    {id: 1, title: "Task 1", estimate: 2},
    {id: 2, title: "Task 2", estimate: 4},
    {id: 3, title: "Task 3", estimate: 6},  
];