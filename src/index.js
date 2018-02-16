// angular dependencies
import angular from './js/angular.js';
import ngRoute from './js/angular-route.min.js';
import uiBootstrap from './js/ui-bootstrap-tpls-2.5.0.min.js';
import ngAnimate from './js/angular-animate.js';
import ngTouch from './js/angular-touch.js';
import dndLists from './js/angular-drag-and-drop-lists.js';

// app
import app from './app/app.js';

// controllers
import './app/controllers/homeController.js';
import './app/controllers/newBoardModalController.js';
import './app/controllers/boardController.js';
import './app/controllers/boardModalController.js';

// services
import './app/services/boardService.js';
import './app/services/teamService.js';
import './app/services/pendingActionsService.js';
import './app/services/cardsService.js';

// directives
import './app/directives/home.js';
import './app/directives/board-creation-modal.js';
import './app/directives/board-items.js';
import './app/directives/new-team.js';
import './app/directives/select-team.js';
import './app/directives/board.js';
import './app/directives/popup.js';
import './app/directives/board-lists.js';

// css
import './css/bootstrap.css';
import './css/playground.css';