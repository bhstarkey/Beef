var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
};

var layout = {
    title: 'Pets by Age',
    xaxis: {title: 'Age'},
    yaxis: {title: 'Pets'}
};

Plotly.newPlot('plotArea', [trace1], layout)