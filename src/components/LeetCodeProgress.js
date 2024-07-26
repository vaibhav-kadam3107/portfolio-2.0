import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './LeetCodeProgress.css';

const LeetCodeProgress = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/Vaibhav_kadam3107/')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setData(data);
        } else {
          console.error('Failed to retrieve data:', data.message);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Fetching Data...</div>;
  }

  const chartData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [{
      data: [data.easySolved, data.mediumSolved, data.hardSolved],
      backgroundColor: ['#00bcd4', '#ff9800', '#f44336'],
      borderWidth: 1
    }]
  };

  const chartOptions = {
    cutout: '80%',
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false }
    }
  };

  return (
    <div className="leetcode-progress-container">
      <div className="chart-container">
        <Doughnut data={chartData} options={chartOptions} />
        <div className="total-solved">
          <span>{data.totalSolved} / {data.totalQuestions}</span>
          <div>Solved</div>
          {/* <div>{data.attempting || 1} Attempting</div> */}
        </div>
      </div>
      <div className="details">
        <div className="easy">
          Easy<br />
          <div className="text-white">
            <span>{data.easySolved}</span>
            <span className="mx-1">/</span>
            <span>{data.totalEasy}</span>
          </div>
        </div>
        <div className="medium">
          Med.<br />
          <div className="text-white">
            <span>{data.mediumSolved}</span>
            <span className="mx-1">/</span>
            <span>{data.totalMedium}</span>
          </div>

        </div>
        <div className="hard">
          Hard<br />
          <div className="text-white">
            <span>{data.hardSolved}</span>
            <span className="mx-1">/</span>
            <span>{data.totalHard}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeetCodeProgress;
