import React, { Component } from "react";
import ReactHighcharts from 'react-highcharts';
import numbro from 'numbro';

const categories = [
  'Apple',
  'Google',
  'Microsoft',
  'Amazon',
  'Facebook',
  'Alibaba(阿里巴巴)',
  'Tencent（腾讯)'

];

const revenues = [53.3, 32.7, 30.1, 52.9, 13.2, 9.5, 11.3];
const series = [{
  data: [
    {y: 0.17, color: 'rgba(229,208,154, 0.8)'},
    {y: 0.26, color: 'rgba(228,179,74, 0.8)'},
    {y: 0.29, color: 'rgba(244,108,117, 0.8)'},
    {y: 0.39, color: 'rgba(114,196,168	, 0.8)'},
    {y: 0.42, color: 'rgba(120,166,206	, 0.8)'},
    {y: 0.61, color: 'rgba(158,207,109	, 0.8)'},
    {y: 0.48, color: 'rgba(240,144,69	, 0.8)'},
  ]
}];
const config = {
  credits: {
    enabled: false,
  },
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Revenue comparision of top 7 companies (2018 Q2)'
  },
  subtitle: {
    text: '$B'
  },
  xAxis: {
    tickWidth: 0,
    lineWidth: 0,
    categories,
    labels: {
      useHTML: true,
      formatter() {
        const i = this.pos;
        const color = series[0].data[i].color;
        const max = Math.max(...revenues);
        const width = Math.sqrt(revenues[i] /max) * 50;
        return `<div class="circles" style="display: flex; width: 120px;">
          <div class="symbol" style="width: 60px; position: relative;">
            <div class="circle" style="text-align: center;position: absolute; top:50%; left:50%; transform: translate(-50%, -50%); border-radius: 50%; color: white; width: ${width}px; height: ${width}px; line-height: ${width}px; background-color: ${color};">${revenues[i]}</div>
          </div>
          <div>${this.value}</div>
        </div>`;
      }
    }
  },
  yAxis: {
    lineWidth: 0,
    visible: false,
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        formatter() {
          return `<div style="color: ${this.color};">${numbro(this.y).format({output: 'percent', mantissa: 0})}</div>`;
        }
      }
    },
  },
  series,
};

class Chart extends Component {
  render() {
    return (
      <div>
        <ReactHighcharts config={config} />
      </div>
    );
  }
}

export default Chart
