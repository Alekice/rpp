zingchart.render({
	id: 'chart-buro',
	data: {
		type: 'bar',
		globals: {
			fontFamily: '"Rubik", Arial, sans-serif',
			fontSize: 12,
			color: "#444444"
		},
		legend: {
			visible: false
		},
		plot: {
			aspect: "spline",
			stacked: true,
			marker: {
				visible: false
			}
		},
		plotarea: {
			'margin-right': "15px",
		},
		plot: {
			animation: {
				effect: "ANIMATION_EXPAND_LEFT",
				// delay: "2000",
				method: "ANIMATION_REGULAR_EASE_OUT",
				sequence: "ANIMATION_BY_PLOT",
				speed: "600"
			},
			tooltip: {
				text: "%t: %v ТЗ",
				'font-color': "white",
				'font-family': '"Rubik", Arial, sans-serif',
				'font-size': 14,
				'font-weight': "normal",
				'font-style': "normal"
			}
		},
		'scale-x': {
			values: ["январь", "февраль", "март", "апрель", "май"],
			item: {
				fontSize: 12
			}
		},
		scrollX: {

		},
		'scale-y': {
			step: 50
		},
		series: [
			{
				values: [181, 427, 729, 1003, 1157],
				text: 'ООО «Патентное бюро «ЖЕЛЕЗНО»',
				backgroundColor: '#4f81bd',
				barWidth: '40%'
			}
		]
	},
	height: "480px",
	width: "100%"
});