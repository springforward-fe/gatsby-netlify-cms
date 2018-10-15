import React, { Component } from "react";
import ReactHighcharts from 'react-highcharts';
import numbro from 'numbro';

const chartsGrid = `"a a" 
"b c" 
"b c"  / 1fr 1fr`;
const charts = [
  {
    name: 'Apple',
    data: [
      ['iPhone', 29.9],
      ['iPad', 4.7],
      ['Mac', 5.3],
      ['Services', 9.5],
      ['iPhone', 3.7],
    ]
  },
  {
    name: 'Google',
    data: [
      ['Ads(properties)', 23.3],
      ['Ads(Network)', 4.8],
      ['Others', 4.4],
    ]
  },
  {
    name: 'Microsoft',
    data: [
      ['Productivity & Business', 9.7],
      ['Cloud', 9.6],
      ['PC', 10.8],
    ]
  },
  {
    name: 'Amazon',
    data: [
      ['Online', 27.2],
      ['Stores', 4.3],
      ['3rd Party', 9.7],
      ['Subscription', 3.4],
      ['AWS', 6.1],
      ['Others', 2.2],
    ]
  },
  {
    name: 'Facebook',
    data: [
      ['Payment and others', 0.2],
      ['Advertising', 13.0],
    ]
  },
  {
    name: 'Alibaba(阿里巴巴)',
    data: [
      ['Core eCommerce', 10.5],
      ['Cloud', 0.7],
      ['Entertainment', 0.9],
      ['Innovation & Others', 0.2],
    ]
  },
  {
    name: 'Tencent（腾讯',
    data: [
      ['Game', 3.9],
      ['Advertising', 2.2],
      ['Social Network', 2.6],
      ['Others', 2.7],
    ]
  },
];

const config = {
  credits: {
    enabled: false,
  },
  chart: {
    type: 'pie',
  },
  plotOptions: {
    pie: {
      size: "55%",
      innerSize: '50%',
      cursor: 'pointer',
      dataLabels: {
        style: {
          fontSize: '10px',
          fontWeight: 100,
        },
        distance: 1,
        useHTML: true,
        crop: false,
        overflow: 'none',
        formatter() {
          return `${this.key}<br> ${this.y}(${numbro(this.percentage).format({mantissa: 2})}%)`;
        }
      }
    }
  },
};

function Donut3d(props) {
  return (
    <div>
      <ReactHighcharts config={{...config, title: {text: props.series.name}, series: [{...props.series}]}} />
    </div>
  );
}

class Chart extends Component {
  render() {
    return (
      <div style={{display: 'grid', gridTemplate: chartsGrid}}>
        {charts.map(data =>(<Donut3d series={data} />))}
      </div>
    );
  }
}

export default Chart;
