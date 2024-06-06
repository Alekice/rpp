zingchart.render({
	id: 'chart-pa',
	data: {
		type: 'line',
		globals: {
			fontFamily: '"Rubik", Arial, sans-serif',
			fontSize: 12,
			color: "#444444"
		},
		legend: {
			// header: {
			// 	text: "Компании",
			// 	// 'background-color': "#ffe6e6",
				// 'border-left': "2px solid red",
			// 	// 'border-right': "2px solid red",
			// 	// 'border-top': "2px solid red",
			// 	// 'border-bottom': "2px solid red"
			// },
			// 'background-color': "#8d8d8d",
			'border-width': 1,
			'border-color': "#8d8d8d",
			adjustLayout: true,
			marker: {
				// 'background-color': "#ffe6e6",
				// 'border-width': 1,
				// 'border-color': "red",
				type: "circle",
				'show-line': false,
				// 'line-color': "red"
			},
			layout: "10x1",
			// x: "71%",
			y: "12%",
			mediaRules: [
				{
					maxWidth: 750,
					'width': "100%",
					'align': 'left',
					layout: "2x2",
					maxItems: 4,
					overflow: 'page',
					'page-on': {
						'background-color': "red",
						'border-width': 1,
						'border-color': "red"
					},
					'page-off': {
						'background-color': "#ffe6e6",
						'border-width': 1,
						'border-color': "red",
						alpha: 0.5
					},
					'page-status': {
						anchor: 'c',
						'font-color': "red",
						'font-size': 11,
						'font-family': "Georgia",
						// 'background-color': "#ffe6e6",
					},
				}
			]
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
			// item: {
			// 	fontSize: 10
			// }
			// minValue: 'январь',
			// step: 'day',
			// transform: {
			// 	type: 'date',
			// 	all: '%M %d'
			// },
			item: {
				fontSize: 12
			},
			maxItems: 13,

			// zooming: true,
			// zoomToValues: ['февраль', 'апрель'],
			// guide: {
			// 	alpha: 1,
			// 	lineStyle: 'solid',
			// 	visible: true
			// },
			// minorTicks: 7,
			// minorGuide: {
			// 	alpha: 0.7,
			// 	lineStyle: 'dotted'
			// },
			// markers: [{
			// 	type: 'area',
			// 	backgroundColor: 'yellow',
			// 	range: ['январь', 'март'],
			// 	valueRange: true
			// },
			// {
			// 	type: 'area',
			// 	backgroundColor: 'red',
			// 	range: ['апрель', 'май'],
			// 	valueRange: true
			// },
			// {
			// 	type: 'area',
			// 	backgroundColor: 'green',
			// 	range: ['февраль', 'март'],
			// 	valueRange: true
			// }
			// ]
		},
		scrollX: {

		},
		// preview: {},
		'scale-y': {
			step: 100
		},
		// crosshairX: {
		// 	alpha: 0.3,
		// 	lineWidth: '100%',
		// 	plotLabel: {
		// 		// text: '%node-value',

		// 		borderRadius: 3,
		// 		multiple: false,
		// 		placement: 'node-top'
		// 	},
		// 	scaleLabel: {
		// 		borderRadius: 3,
		// 	}
		// },
		series: [
			{
				values: [181, 427, 729, 1003, 1157],
				text: 'ООО «Патентное бюро «ЖЕЛЕЗНО»'
			},
			{
				values: [52, 169, 370, 557, 651],
				text: 'ООО «БизБренд»'
			},
			{
				values: [87, 181, 298, 440, 686],
				text: 'ООО «ОНЛАЙН ПАТЕНТ»'
			},
			{
				values: [46, 198, 246, 374, 598],
				text: 'Юридическая фирма «Городисский и партнеры»'
			},
			{
				values: [78, 146, 230, 322, 562],
				text: 'ООО «Дивизион»'
			},
			{
				values: [102, 204, 278, 358, 454],
				text: 'ООО «Патентус»'
			},
			{
				values: [44, 138, 202, 276, 402],
				text: 'ООО «ФПБ Гардиум»'
			},
			{
				values: [66, 182, 217, 282, 322],
				text: 'ООО «Лирейт»'
			},
			{
				values: [68, 124, 172, 238, 307],
				text: 'ООО «Центр защиты товарных знаков»'
			},
			{
				values: [10, 25, 48, 104, 186],
				text: 'ООО «Башук Чичканов, юридическая фирма»'
			},
		]
	},
	height: "480px",
	width: "100%"
});