import { Controller } from './modules/controller';
import { View } from './modules/view';
import './style.css';

View.init();
Controller.loadTodoList();
Controller.updateProjectList();
Controller.refreshView();