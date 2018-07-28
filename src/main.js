import App from './App.html';
import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/js/waves.js';

const app = new App({
	target: document.body,
	data: {
		name: 'xxx'
	}
});

window.app = app;

export default app;