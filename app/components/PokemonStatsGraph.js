import React from 'react';
import dynamic from 'next/dynamic';

const DynamicChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const PokemonStatsGraph = ({ stats }) => {
  const labels = stats.map(stat => stat.stat.name);
  const values = stats.map(stat => stat.base_stat);

  const options = {
    chart: {
      id: 'pokemon-stats',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: labels,
    },
    yaxis: {
      min: 0,
    },
    colors: ['#00E396'],
    dataLabels: {
      enabled: false,
    },
  };

  const series = [{
    name: 'Base Stats',
    data: values,
  }];

  return (
    <div>
      <h3>Stats Graph</h3>
      <DynamicChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default PokemonStatsGraph;
