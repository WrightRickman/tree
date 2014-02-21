

  ///////////////
  ///TREE DATA///
  ///////////////

  var manhattanTreeData = manhattan_trees.data
  var manhattanTreeDataLength = manhattanTreeData.length

  var brooklynTreeData = brooklyn_trees.data
  var brooklynTreeDataLength = brooklynTreeData.length

  var bronxTreeData = bronx_trees.data
  var bronxTreeDataLength = bronxTreeData.length

  var queensTreeData = queens_trees.data
  var queensTreeDataLength = queensTreeData.length

  var allTreeLengths = [manhattanTreeDataLength, brooklynTreeDataLength, bronxTreeDataLength, queensTreeDataLength]

  var treeProjection = d3.select("#tree_container")
                      .selectAll('div')

  _.each(allTreeLengths, function(tree){
      treeProjection.data([tree])
                .append('div')
                .style('width', function(d){return (d/100) + 'px' })
                .style('height', function(d){ return (d/100) + 'px' })
                .style({
                  'background-color': "tomato",
                  'border-radius': "100%",
                  'opacity': "0.5",
                  'margin': "0 auto",
                  'float': "left"
            })
  })

  ///////////////
  ///WIFI DATA///
  ///////////////

  var wifiData = wifi.data;
  var manhattanWifi = [];
  var brooklynWifi = [];
  var bronxWifi = [];
  var queensWifi = [];

  _.each(wifiData, function(element, index){
    switch (wifiData[index][11]) {
      case "New York":
        manhattanWifi.push(wifiData[index]);
        // console.log('manhattanWifi');
        break;
      case "Brooklyn":
        brooklynWifi.push(wifiData[index]);
        // console.log("brooklyn works");
        break;
      case "Bronx":
        bronxWifi.push(wifiData[index]);
        // console.log("bronx works");
        break;
      default:
        queensWifi.push(wifiData[index]);
        // console.log("queens works");
        break;
    }   
  })

  var manhattanWifiLength = manhattanWifi.length
  var brooklynWifiLength = brooklynWifi.length
  var bronxWifiLength = bronxWifi.length
  var queensWifiLength = queensWifi.length

  var allWifiLengths = [manhattanWifiLength, brooklynWifiLength, bronxWifiLength, queensWifiLength]

  var wifiProjection = d3.select("#wifi_container")
                    .selectAll('div')

  _.each(allWifiLengths, function(wifi){
    wifiProjection.data([wifi])
            .append('div')
            .style('width', function(d){return (d) + 'px' })
            .style('height', function(d){ return (d) + 'px' })
            .style({
                'background-color': "cornflowerblue",
                'border-radius': "100%",
                'opacity': "0.5",
                'margin': "0 auto",
                'float':"right"
            })
  })
