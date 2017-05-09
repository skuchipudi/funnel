import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

declare var jQuery: any;
declare var Highcharts: any;

@Injectable()
export class ColumnChartService {

      renderChart( data ) {
		   jQuery('#columnchartcontainer').highcharts({
				 chart: {
				 	type: 'column'
				 },
				
				title: {
					text: 'FileSentinel Transfer Charts'
				},
				xAxis: {
					type: 'datetime'
				},
				yAxis: {
					title: {
						text: 'Log Entry'
					}
					// labels: {
					// 	formatter: function () {
					// 		return this.value / 1000 + 'k';
					// 	}
					// }
				},
				series: data
			});
		}

}
