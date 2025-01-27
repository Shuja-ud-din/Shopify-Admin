import  { FC } from 'react';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';


const EarningCharts: FC = () => {
  return (
   
    <div className="w-full flex  gap-2">
      
      <div className="w-[67%] h-auto border-2 border-[#A8A8A8] rounded-xl px-5 pt-4 pb-7">
        <div className="charts-head">
          <div className="tips flex justify-between">
            <h4 className="text-Black font-medium text-base">Earnings Summary</h4>
            <div className="tips-period flex items-center gap-1">
              <h5 className="text-Black font-medium text-sm">This Week</h5>
             
            </div>
          </div>
        </div>

        <div id="myChart" className="chart-container h-[57%]">
          <BarChart  />
          <ul className="list-disc list-marker-red-blue flex items-center w-1/4 justify-evenly mt-2">
            <li>Earning Per Month</li>
          </ul>
        </div>
      </div>

     
      <div className="w-[33%] h-100 border-2 border-[#A8A8A8] rounded-xl px-5 pt-4 pb-7">
        <div className="charts-head">
          <div className="tips flex justify-between">
            <h4 className="text-Black font-medium text-base uppercase">Earnings</h4>
            <div className="tips-period flex items-center gap-1">
              <h5 className="text-Black font-medium text-sm">This Week</h5>
             
            </div>
          </div>
        </div>
        
        <div className="main-value mt-3">
          <p className="font-medium text-3xl text-[#165BAA]">$45,678</p>
        </div>

        <div className="order">
          <h6 className="text-gray-950 text-lg font-normal">28 days</h6>
        </div>

        <DoughnutChart />
      </div>
    </div>
  );
};

export default EarningCharts;
