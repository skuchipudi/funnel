import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var jQuery: any;
declare var Highcharts: any;

@Injectable()
export class AreaChartService {

      renderChart( data ) {
			jQuery('#areachartcontainer').highcharts({
				chart: {
					type: 'column'
				},
				title: {
					text: 'FileSentinel Transfer Charts'
				},
				subtitle: {
					// text: 'Source: thebulletin.metapress.com'
				},
				xAxis: {
					//categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					//allowDecimals: false,
					//labels: {
					//	formatter: function () {
					//		return this.value;
					//	}
					//}
				},
				yAxis: {
					title: {
						text: 'Log Entry'
					},
					//labels: {
					//	formatter: function () {
					//		return this.value / 1000 + 'k';
					//	}
					//}
				},
				tooltip: {
					//pointFormat: '{series.name} produced <b>{point.y:,.0f}</b>' +
					//			'<br/>dollars in {point.x}'
				},
				// plotOptions: {
				// 	area: {
				// 		pointStart: 0,
				// 		marker: {
				// 			enabled: false,
				// 			symbol: 'circle',
				// 			radius: 2,
				// 			states: {
				// 				hover: {
				// 					enabled: true
				// 				}
				// 			}
				// 		}
				// 	}
				// },
				series: data
			});
		}

}
