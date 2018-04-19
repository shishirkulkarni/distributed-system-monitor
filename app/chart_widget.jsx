import Highcharts from 'highcharts';
import 'highcharts/css/highcharts.css';

export default class ChartWidget {
	
	constructor(uuid, app) {
		this.uuid = uuid;
		this.app = app;
	}

	init() {
		this.app.$eventAggregator.on('onDataUpdate', this.onDataUpdate.bind(this));
	}

	onDataUpdate() {
		console.log(this.uuid);
	}

	render() {
		this.chart = Highcharts.chart(this.uuid, {
			'chart': {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadows: false,
				type: 'pie'
			},
			title: {
				text: 'test'
			},
			series: [{
				name: 'Test',
				colorByPoint: true,
				data: [{
					name: 'One',
					y: 50,
				}, {
					name: 'Two',
					y: 50
				}]
			}]

		});

		let data2 = [{
			name: 'One',
			y: 90
		}, {
			name: 'Two',
			y: 10
		}];
	}

	updateData() {

	}
}


