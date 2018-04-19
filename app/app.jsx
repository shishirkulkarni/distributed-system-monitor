import ChartWidget from "chart_widget.jsx";
import jQuery from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

window.$ = jQuery

class App {
	constructor() {
		this.charts = {};
		this.$appContainer = $("#app-container")
	}

	start() {
		// create a ws connection to the server
		this.$eventAggregator = $("#event-aggregator");

		this.socket = new WebSocket('ws://localhost:3000/connect');
		console.log(this.socket)

		this.socket.onmessage = this.onUpdate.bind(this);
	}

	onUpdate() {
		let uuid = 'abc';
		this.$appContainer.append('<div id="' + uuid + '"></div>');
		
		let pieChartWidget = new ChartWidget(uuid, this);

		this.charts[uuid] = pieChartWidget;
		this.charts[uuid].init();
		this.charts[uuid].render();
	}


}

new App().start();
