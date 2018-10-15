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
  'Tencent（腾讯）'
];
const series = [
  {
    data: [
      2075000,
      1457000,
      841000,
      368000,
      1602000,
      580000,
      817000,
    ],
    pointWidth: 20,
    color: 'Teal'
  },
];
const config = {
  credits: {
    enabled: false,
  },
  chart: {
    type: 'bar',
  },
  title: {
    text: 'HOW MUCH REVENUE TECH COMPANIES MAKE PER EMPLOYEE?'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    tickWidth: 0,
    lineWidth: 0,
    categories,
    title: {
      text: null
    }
  },
  yAxis: {
    lineWidth: 2,
    lineColor: 'black',
    title: {
      text: 'Dollars per Employee',
    },
    tickInterval: 250000,
    labels: {
      formatter() {
        return `$${numbro(this.value).format({average: true, totalLength: 3})}`;
      },
    },
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
        align: 'right',
        inside: true,
        style: {
          textOutline: 'none',
        },
        formatter() {
          return `$${numbro(this.y).format({thousandSeparated: true})}`;
        }
      }
    },
  },
  series,
};

class Chart extends Component {
  render() {
    return (
      <div className="Bar">
        <ReactHighcharts config={config} />
      </div>
    );
  }
}

export default Chart
