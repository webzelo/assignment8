import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";

const Chart = ({ ratings }) => {
  const reverseData = [...ratings].reverse();

  return (
    <div className="w-full h-70 md:h-110 lg:h-150 bg-[#d3b07c21] rounded-2xl border p-2 md:p-4 mb-4 ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={reverseData} layout="vertical">
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis
            dataKey="name"
            type="category"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="count" fill="green" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

