import { Controller } from './modules/controller';
import { View } from './modules/view';
import './style.css';

View.init();
Controller.addList();
Controller.displayTodoList();
// TODO: refactor code for improvement before localstorage