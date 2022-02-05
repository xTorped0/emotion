<script lang='ts'>
	import type { Emotion } from '../types';
	import data from '../../data.js'

	import Chart from 'svelte-frappe-charts';

	function getChartData(d: Emotion[]) {
		return {
			labels: d.map(emotion => emotion.name),
			datasets: [
      {
        values: d.map(emotion => emotion.factors.reduce((acc, current) => current.grade + acc, 0))
      }
    ]
		}
	}	

	const chartData = getChartData(data)	
</script>

<div class="charts">
	<div class="chart">
		<Chart data={chartData} type='line' title='Емоции' />
	</div>
</div>

<style lang="scss">
	.charts {
		display: flex;
		flex-direction: column;
		color: white;
		flex: 1;
	}

	.chart {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>