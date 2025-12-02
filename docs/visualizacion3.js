    (function(vegaEmbed) {
      var spec = {"config": {"view": {"continuousWidth": 300, "continuousHeight": 300, "fill": "#000000", "stroke": "transparent"}, "axis": {"labelColor": "#DDCEBB", "titleColor": "#DDCEBB"}, "mark": {"color": "#ECD14D"}, "title": {"color": "#DDCEBB"}}, "data": {"name": "data-0738b5083f56c9768bdcba5c630a8ea3"}, "mark": {"type": "line", "point": {"color": "#D93D86", "size": 80}}, "background": "#000000", "encoding": {"tooltip": [{"field": "Fecha", "title": "A\u00f1o", "type": "quantitative"}, {"field": "Cantidad", "title": "Indies nominados", "type": "quantitative"}], "x": {"axis": {"labelColor": "#DDCEBB", "titleColor": "#DDCEBB"}, "field": "Fecha", "scale": {"domain": [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]}, "title": "A\u00f1o", "type": "ordinal"}, "y": {"axis": {"labelColor": "#DDCEBB", "titleColor": "#DDCEBB", "values": [0, 1, 2, 3, 4, 5, 6]}, "field": "Cantidad", "scale": {"domain": [0, 6], "nice": false}, "title": "Cantidad de nominados indie", "type": "quantitative"}}, "height": 400, "title": "Nominaciones Indie a Juego del a\u00f1o en The Game Awards (2014\u20132025)", "width": 700, "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json", "datasets": {"data-0738b5083f56c9768bdcba5c630a8ea3": [{"Fecha": 2014, "Cantidad": 0.0}, {"Fecha": 2015, "Cantidad": 0.0}, {"Fecha": 2016, "Cantidad": 1.0}, {"Fecha": 2017, "Cantidad": 0.0}, {"Fecha": 2018, "Cantidad": 1.0}, {"Fecha": 2019, "Cantidad": 0.0}, {"Fecha": 2020, "Cantidad": 1.0}, {"Fecha": 2021, "Cantidad": 0.0}, {"Fecha": 2022, "Cantidad": 1.0}, {"Fecha": 2023, "Cantidad": 0.0}, {"Fecha": 2024, "Cantidad": 1.0}, {"Fecha": 2025, "Cantidad": 3.0}]}};
      var embedOpt = {"mode": "vega-lite"};

      function showError(el, error){
          el.innerHTML = ('<div style="color:red;">'
                          + '<p>JavaScript Error: ' + error.message + '</p>'
                          + "<p>This usually means there's a typo in your chart specification. "
                          + "See the javascript console for the full traceback.</p>"
                          + '</div>');
          throw error;
      }
      const el = document.getElementById('vis');
      vegaEmbed("#vis3", spec, embedOpt)
        .catch(error => showError(el, error));
    })(vegaEmbed);