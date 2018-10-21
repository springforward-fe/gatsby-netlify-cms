import React, { Component } from "react";
import ReactHighcharts from 'react-highcharts';
import './line-time-series.scss';
import AAPL from '../../../data/market-cap/AAPL.json';
import AMZN from '../../../data/market-cap/AMZN.json';
import GOOGL from '../../../data/market-cap/GOOGL.json';
import MSFT from '../../../data/market-cap/MSFT.json';
import FB from '../../../data/market-cap/FB.json';
import TCEHY from '../../../data/market-cap/TCEHY.json';
import BABA from '../../../data/market-cap/BABA.json';

const TenYearsAgo = new Date();
TenYearsAgo.setFullYear(TenYearsAgo.getFullYear() - 10);
const series = [{
  name: AAPL.chart_data[0][0].long_label.replace('Market Cap', ''),
  data: AAPL.chart_data[0][0].raw_data.filter(pair => pair[0] > TenYearsAgo).map(([x, y]) => [x, Math.round(y/1000)]),
}, {
  name: AMZN.chart_data[0][0].long_label.replace('Market Cap', ''),
  data: AMZN.chart_data[0][0].raw_data.filter(pair => pair[0] > TenYearsAgo).map(([x, y]) => [x, Math.round(y/1000)]),
}, {
  name: GOOGL.chart_data[0][0].long_label.replace('Market Cap', ''),
  data: GOOGL.chart_data[0][0].raw_data.filter(pair => pair[0] > TenYearsAgo).map(([x, y]) => [x, Math.round(y/1000)]),
}, {
  name: MSFT.chart_data[0][0].long_label.replace('Market Cap', ''),
  data: MSFT.chart_data[0][0].raw_data.filter(pair => pair[0] > TenYearsAgo).map(([x, y]) => [x, Math.round(y/1000)]),
}, {
  name: FB.chart_data[0][0].long_label.replace('Market Cap', ''),
  data: FB.chart_data[0][0].raw_data.filter(pair => pair[0] > TenYearsAgo).map(([x, y]) => [x, Math.round(y/1000)]),
}, {
  name: TCEHY.chart_data[0][0].long_label.replace('Market Cap', ''),
  data: TCEHY.chart_data[0][0].raw_data.filter(pair => pair[0] > TenYearsAgo).map(([x, y]) => [x, Math.round(y/1000)]),
}, {
  name: BABA.chart_data[0][0].long_label.replace('Market Cap', ''),
  data: BABA.chart_data[0][0].raw_data.filter(pair => pair[0] > TenYearsAgo).map(([x, y]) => [x, Math.round(y/1000)]),
}].sort((a, b) => b.data[b.data.length - 1][1] - a.data[a.data.length - 1][1]);

const config = {
  credits: {
    enabled: false,
  },
  chart: {
    height: 500,
  },
  title: {
    text: 'Top 7 Internet Companies'
  },
  subtitle: {
    text: 'Market Cap ($B)'
  },
  xAxis: {
    type: 'datetime',
  },
  yAxis: {
    visible: false,
  },
  legend: {
    align: 'left',
    verticalAlign: 'top',
    layout: 'vertical',
    useHTML: true,
    symbolWidth: 0,
    labelFormatter() {
      const name = this.name;
      const color = this.color;
      const maxCap = this.chart.series.reduce((max, {yData}) =>  Math.max(max, yData[yData.length - 1]), 0);
      const cap = this.yData[this.yData.length -1];
      const width = parseInt(cap * 40 / maxCap, 10);
      return `<div class="legend">
        <div class="symbol">
          <div class="circle" style="width: ${width}px; height: ${width}px; line-height: ${width}px; background-color: ${color};">${cap}</div>
        </div>
        <div class="title">${name}</div>
      </div>`;
    },
    x: 0,
    y: 20,
    itemMarginBottom: 0,
    floating: true,
  },
  tooltip: {
    shared: true,
    useHTML: true,
    padding: 0,
    crosshairs: {
      color: 'lightGrey',
      dashStyle: 'solid'
    },
    formatter() {
      const html = [];
      html.push(`<b>${new Date(this.x).toDateString()}</b><br>`);
      this.points.sort((a, b) => b.y - a.y).forEach(({y, color, series: {name}}) => {
        html.push(`<div style="color: ${color}; display: table-row;">
          <div style="display: table-cell;">${name}:</div>
          <div style="display: table-cell;">${y}</div>
        </div>`);
      });
      return `<div style="display: table;"> ${html.join('')} </div>`;
    },
  },
  plotOptions: {
    line: {
      marker: {
        enabled: false,
      }
    },
    series: {
      marker: {
        symbol: 'circle',
      },
    },
  },
  series,
}

class Chart extends Component {
  render() {
    return (
      <div className="LineTimeSeries">
        <ReactHighcharts config={config} />
      </div>
    );
  }
}

export default Chart;
