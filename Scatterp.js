var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
  };
  
  
  var data = [trace1];
  var layout = {
    title: 'Scatter Plot with a Color Dimension'
  };
  
  Plotly.newPlot('plotArea3', data, layout);