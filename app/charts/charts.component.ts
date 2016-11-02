import {Component, OnInit} from '@angular/core';

import {BarChartService} from './barchart.service';
import {PieChartService} from './piechart.service';
import {AreaChartService} from './areachart.service';

declare var jQuery:any;
declare var Highcharts:any;

@Component({
    template: `
        <h1>Log Charts</h1>
		<table>
		<tr>
        	<td>
				<div style="width:40%" id="areachartcontainer"></div>
			</td>
			<td>
				<div style="width:55%" id="piecontainer"></div>
			</td>
		</tr>
		<tr>
		<!-- TODO move to another page later	<div style="width:100%" id="barchartcontainer"></div> -->
		</tr>
		</table>
        `,
  	providers: [BarChartService, PieChartService, AreaChartService]
   
})

export class ChartsComponent { 
	
	constructor(private _barChartService:  BarChartService,
				private _pieChartService:  PieChartService,
				private _areaChartService: AreaChartService){
    }

    ngAfterViewInit() {
    	this._areaChartService.renderChart();
		//this._barChartService.renderChart();
		this._pieChartService.renderPie();
    }
 
}
	