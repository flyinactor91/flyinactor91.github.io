//Set the graph size
var margin = 75,
width = 1400 - margin,
height = 600 - margin;

//Global var for main body of data
var maindata;

//Months names for title
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
	'July', 'August', 'September', 'October', 'November', 'December'];

//Sets the order that categories will be stacked on each bar
var stackOrder = {
	'violent': 1,
	'nonviolent': 2,
	'transport': 3,
	'oncall': 4,
	'other': 5
};

//Colors associated with the five dispatch categories
var fillColors = {
	'violent': '#e96262',
	'nonviolent': '#4e8ad9',
	'transport': '#e2dd13',
	'oncall': '#aa78bf',
	'other': '#f6a926'
};

//Set fill for svg:circle in the legend
for (var category in fillColors) {
d3.select('#legend-'+category+' svg')
	.style('fill' , fillColors[category]);
}

//Show/hide all info in the header except for the title and dispatch details
function toggleDetails() {
  var button = document.getElementById('detail-toggle');
  debugger;
  console.log(button.textContent.indexOf('Hide'));
  if (button.textContent.indexOf('Hide') == 0) {
    document.getElementById('additional-details').style.display = 'none';
    button.textContent = 'Show additional info';
  } else {
    document.getElementById('additional-details').style.display = 'block';
    button.textContent = 'Hide additional info';
  }
}

//Converts the bin data into values that dimple can easily use
//dates is a list containing data keys to limit the iteration scope
//Ex: [] for years, ['2012','3'] for days in March 2012
function formatGraphData(dates) {
	//Make the dte prefix, ex ['2012','3'] -> '2012-3-'
	var dateprefix = '';
	for (var i in dates) {
		dateprefix = dateprefix + dates[i] + '-';
	}
	//Returns data rows for categories in a given iterator
	function formatCategories(itr) {
		var retData = [];
		for (var key in itr) {
			for (var cat in itr[key].total) {
				retData.push({
					'Date': dateprefix + key,
					'Category': cat,
					'Dispatches': itr[key].total[cat],
					'Order': stackOrder[cat]
				});
			}
		}
		return retData
	}
	//Determine iterator level from 'dates'
	if (dates.length == 2) {
		return formatCategories(maindata[dates[0]][dates[1]])
	} else if (dates.length == 1) {
		return formatCategories(maindata[dates[0]])
	} else if (dates.length === 0) {
		return formatCategories(maindata)
	}
}

function draw(data, xFormat, xDisplay) {
	//Remove previous chart
	d3.select('#graph').selectAll('*').remove();
	
	//Create and place the svg object
	var svg = dimple.newSvg('#graph', width + margin, height + margin);
	
	//Build new chart
	var myChart = new dimple.chart(svg, data);
	//Add axis data
	var x = myChart.addTimeAxis('x', 'Date', xFormat, xDisplay);
	x.floatingBarWidth = 20;
	myChart.addMeasureAxis('y', 'Dispatches');
	//Add ordered stacked bars
	var s = myChart.addSeries(['Order', 'Category'], dimple.plot.bar);
	s.addOrderRule('Order');
	s.categoryFields = ['Category'];
	//Assign category colors
	for (var cat in fillColors) {
		myChart.assignColor(cat, fillColors[cat]);
	}
	//Draw chart
	myChart.draw(1000);
	
	//Update title and back button
	var title = 'Dispatches by ';
	var titleDate = data[0].Date.split('-');
	var graphType = titleDate.length - 1;
	var button = d3.select('#go-back');
	//The graph displays the years
	if (graphType === 0) {
		title += 'Year';
		button.style('visibility', 'hidden');
	//The graph displays the months
	} else if (graphType == 1) {
		title += 'Month in ' + titleDate[0];
		button.style('visibility', 'visible');
		button.on('click', function() {
			console.log('click');
			draw(formatGraphData([]), '%Y', '%Y');
		});
	//The graph displays the days
	} else if (graphType == 2) {
		title += 'Day in ' + monthNames[parseInt(titleDate[1])-1] + ' ' + titleDate[0];
		button.style('visibility', 'visible');
		button.on('click', function() {
			console.log('click');
			draw(formatGraphData([titleDate[0]]), '%Y-%m', '%m');
		});
	}
	d3.select('#graph-title h2').text(title);
	
	//Set onclick for bars to draw new chart or open map
	d3.selectAll('.dimple-bar').on('click', function(b){
		var date = b.x;
		var dateType = xFormat.split('-').length - 1;
		var year = date.getFullYear().toString();
		var month = (date.getMonth() + 1).toString();
		var day = date.getDate().toString();
		//New graph will display the months
		if (dateType === 0) {
			draw(formatGraphData([year]), '%Y-%m', '%m');
		//New graph will display the days
		} else if (dateType == 1) {
			draw(formatGraphData([year, month]), '%Y-%m-%d', '%a %d')
		//Open the dispatch map for a selected day
		} else if (dateType == 2) {
			window.location.href = 'mapping.html?year='+year+'&month='+month+'&day='+day;
		}
	})
}

//Set maindata and draw the year overview graph
function main(data) {
	maindata = data
	draw(formatGraphData([]), '%Y', '%Y')
}

d3.json('data/opdbins.json', main);

//http://jsfiddle.net/farrukhsubhani/S6FLv/7/
//http://jsfiddle.net/mkzTk/2/