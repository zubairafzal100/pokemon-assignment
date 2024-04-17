import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const DynamicChart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Styled components for the PokemonStatsGraph component
const StatsGraphContainer = styled.div`
  margin-top: 20px;
`;

const StatsGraphTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

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
    <StatsGraphContainer>
      <StatsGraphTitle>Stats Graph</StatsGraphTitle>
      <DynamicChart options={options} series={series} type="bar" height={350} />
    </StatsGraphContainer>
  );
};

export default PokemonStatsGraph;
