import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Charts from "../../components/Charts/Charts";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);



const Overview: React.FC = () => {
  return (
    <>
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card>
            <CardHeader>
              <CardDescription>
                <div className="text-xl">Total Users</div>
              </CardDescription>
              <CardTitle>
                <div className="text-4xl">2,456</div>
              </CardTitle>
              <CardDescription>+15% from last month</CardDescription>
            </CardHeader>
            <CardContent>{/* Content here */}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>
                <div className="text-xl">Total Products</div>
              </CardDescription>
              <CardTitle>
                <div className="text-4xl">1,234</div>
              </CardTitle>
              <CardDescription>+8% from last month</CardDescription>
            </CardHeader>
            <CardContent>{/* Content here */}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>
                <div className="text-xl">Total Orders</div>
              </CardDescription>
              <CardTitle>
                <div className="text-4xl">789</div>
              </CardTitle>
              <CardDescription>+12% from last month</CardDescription>
            </CardHeader>
            <CardContent>{/* Content here */}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardDescription>
                <div className="text-xl">Total Revenue</div>
              </CardDescription>
              <CardTitle>
                <div className="text-4xl">$45,678</div>
              </CardTitle>
              <CardDescription>+18% from last month</CardDescription>
            </CardHeader>
            <CardContent>{/* Content here */}</CardContent>
          </Card>
        </div>

        <div className="w-full mt-[1rem] justify-between md:flex xl:flex-row flex-col gap-[1rem]">
          <div className="w-[100%]">
            <Charts />
          </div>
        </div>
      </main>
    </>
  );
};

export default Overview;


