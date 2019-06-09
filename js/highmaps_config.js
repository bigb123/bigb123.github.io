// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
  ['au', 100],
  ['sg', 100],
  ['my', 100],
  ['es', 100],
  ['th', 100]
];

// Create the chart
Highcharts.mapChart('container', {

  plotOptions: {
      series: {
          point: {
              events: {
                  click: function () {

                      // Dynamic content load
                      $("#dynamic-content").load('content/' + this.name + '/story.html');

                      // Scroll down animation
                      $('html, body').animate({
                          scrollTop: $("#dynamic-content").offset().top
                      }, 1000);

                  }
              }
          }
      }
  },

  chart: {
      map: 'custom/world-palestine-highres'
  },

  title: {
      text: 'Mapa podróży'
  },

  subtitle: {
      text: 'Kliknij na kraj spośród dostępnych'
  },

  mapNavigation: {
      enabled: true,
      enableMouseWheelZoom: false,
      mouseWheelSensitivity: 1.01,
      buttonOptions: {
          verticalAlign: 'top'
      }
  },

  colorAxis: {
      min: 0
  },

  series: [{
      data: data,
      name: '',
      states: {
          hover: {
              color: '#BADA55'
          }
      },
      dataLabels: {
          enabled: true,
          format: '{point.name}',
          filter: {
              property: 'value',
              operator: '>=',
              value: 100
          },
          allowOverlap: true
      },
      showInLegend: false
  }]
});
