import './sass/main.scss';
import $ from 'jquery';

import { App } from './scripts/app';

export let app = new App();
app.render($('body'));