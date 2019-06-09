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
                      // location.href = 'https://en.wikipedia.org/wiki/' + this.name;
                      // location.href = 'content/' + this.name + '/story.html'
                      $("#dynamic-content").load('content/' + this.name + '/story.html');
                      // document.getElementById('dynamic-content').scrollIntoView();
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
              operator: '>',
              value: 50
          }
      },
      showInLegend: false
  }]
});
