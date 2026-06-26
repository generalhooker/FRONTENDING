import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "@/components/ui/button";

const data3m = [
  { date: "Apr 1", visitors: 1200 },
  { date: "Apr 8", visitors: 980 },
  { date: "Apr 15", visitors: 1400 },
  { date: "Apr 22", visitors: 1100 },
  { date: "May 1", visitors: 1600 },
  { date: "May 8", visitors: 1300 },
  { date: "May 15", visitors: 2100 },
  { date: "May 22", visitors: 1800 },
  { date: "Jun 1", visitors: 2400 },
  { date: "Jun 8", visitors: 2200 },
  { date: "Jun 15", visitors: 2800 },
  { date: "Jun 22", visitors: 3100 },
];

const data30d = [
  { date: "May 28", visitors: 1800 },
  { date: "May 30", visitors: 2100 },
  { date: "Jun 1", visitors: 2400 },
  { date: "Jun 3", visitors: 2000 },
  { date: "Jun 5", visitors: 2600 },
  { date: "Jun 7", visitors: 2200 },
  { date: "Jun 9", visitors: 2900 },
  { date: "Jun 11", visitors: 3100 },
  { date: "Jun 13", visitors: 2700 },
  { date: "Jun 15", visitors: 3400 },
  { date: "Jun 17", visitors: 3100 },
  { date: "Jun 20", visitors: 3600 },
  { date: "Jun 22", visitors: 3100 },
  { date: "Jun 24", visitors: 3800 },
  { date: "Jun 26", visitors: 4100 },
];

const data7d = [
  { date: "Jun 20", visitors: 3600 },
  { date: "Jun 21", visitors: 3100 },
  { date: "Jun 22", visitors: 3800 },
  { date: "Jun 23", visitors: 4200 },
  { date: "Jun 24", visitors: 3900 },
  { date: "Jun 25", visitors: 4500 },
  { date: "Jun 26", visitors: 4100 },
];

type Range = "3m" | "30d" | "7d";

const ranges: { label: string; value: Range }[] = [
  { label: "Last 3 months", value: "3m" },
  { label: "Last 30 days", value: "30d" },
  { label: "Last 7 days", value: "7d" },
];

export function VisitorsChart() {
  const [range, setRange] = useState<Range>("3m");

  const chartData = range === "3m" ? data3m : range === "30d" ? data30d : data7d;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold">Total Visitors</h3>
          <p className="text-sm text-muted-foreground">Total for the last {range === "3m" ? "3 months" : range === "30d" ? "30 days" : "7 days"}</p>
        </div>
        <div className="flex items-center gap-1 rounded-lg border p-1">
          {ranges.map((r) => (
            <Button
              key={r.value}
              variant={range === r.value ? "secondary" : "ghost"}
              size="sm"
              className="h-7 text-xs"
              onClick={() => setRange(r.value)}
            >
              {r.label}
            </Button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="visitorsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.15} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
          <XAxis
            dataKey="date"
            fontSize={11}
            tickLine={false}
            axisLine={false}
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            interval="preserveStartEnd"
          />
          <YAxis
            fontSize={11}
            tickLine={false}
            axisLine={false}
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
          />
          <Area
            type="monotone"
            dataKey="visitors"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            fill="url(#visitorsGradient)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
