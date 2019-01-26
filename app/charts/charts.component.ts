/*
 *   Copyright 2019  Sunil S. Kuchipudi	
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. See accompanying LICENSE file.
 */

import {Component, OnInit} from '@angular/core';

import {BarChartService} from './barchart.service';
import {PieChartService} from './piechart.service';
import {ColumnChartService} from './columnchart.service';

declare var jQuery: any;
declare var Highcharts: any;

@Component({
    template: `
        <h1>Log Charts</h1>
		<table>
		<tr>
			<td>
				<div style="width:50%" id="columnchartcontainer"></div>
			</td>
			<td>&nbsp;</td>
			<td>
				<div style="width:50%" id="piecontainer"></div>
			</td>
		</tr>
		<tr>
		<!-- TODO move to another page later	<div style="width:100%" id="barchartcontainer"></div> -->
		</tr>
		</table>
        `,
		providers: [BarChartService, PieChartService, ColumnChartService]
})

export class ChartsComponent {
	

	constructor(private _barChartService:  BarChartService,
				private _pieChartService:  PieChartService,
				private _columnChartService: ColumnChartService
				) {
   }
    ngAfterViewInit() {

		// populate by call the data service																																									
		 var daata =  [
                 			{
			 				name: 'Audit Log Time series - 	',
			 				data: [	     25, 5000, 120, 40000, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
			 							4238, 5221, 120, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
			 							5915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,										33952, 35804, 120, 39197, 45000, 43000, 41000, 39000, 37000,
			 							35000, 33000, 2, 3, 4, 25000, 24000, 23000, 22000,
			 							21000, 20000, 120, 18000, 18000, 17000, 16000]
			 						}

			    ];
		this._columnChartService.renderChart(daata);// data hard coded
		//this._barChartService.renderChart();
		this._pieChartService.renderPie(); // data hard coded
    }

}

