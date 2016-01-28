import {Component} from 'angular2/core';
import {Task} from './task';
import {TaskService} from './task.service';
import {TaskListComponent} from './task-list.component';

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
            <task-list></task-list>
        </div>
  `,
  styles: [`
        #top-bar { background-color: lime; height: 45px; width: 100%; position: fixed; text-align: center; z-index: 100; }
        #top-bar h2 { margin-top: 8px;}
        #menu-left { float: left; width: 200px; position: fixed; background-color: lightgrey; padding-top: 50px; margin-left: 20px; }
        #content { padding-top: 50px; margin-left: 250px; }
  `],
  directives: [TaskListComponent],
  providers: [TaskService]
})
export class AppComponent {

    constructor(private _taskService: TaskService) {}
    
}
