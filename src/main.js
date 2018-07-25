import App from './App.html';
import 'material-design-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';

const app = new App({
	target: document.body,
	data: {
		name: 'world'
	}
});

window.app = app;

export default app;