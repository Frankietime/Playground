// angular dependencies
import angular from './js/angular.js';
const ngRoute = require('angular-route');
const uiBootstrap = require('angular-ui-bootstrap');
const ngAnimate = require('angular-animate');
const ngTouch = require('angular-touch');
const dndLists = require('angular-drag-and-drop-lists');

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
import './variables.scss';
import './styles.scss';
import './mobile.scss';
