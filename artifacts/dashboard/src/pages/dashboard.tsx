import {
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { VisitorsChart } from "@/components/dashboard/visitors-chart";
import { AppLayout } from "@/components/dashboard/app-layout";

const stats = [
  {
    title: "Total Revenue",
    value: "$1,250.00",
    change: "+12.5%",
    trend: "up" as const,
    detail: "Trending up this month",
    sub: "Visitors for the last 6 months",
  },
  {
    title: "New Customers",
    value: "1,234",
    change: "-20%",
    trend: "down" as const,
    detail: "Down 20% this period",
    sub: "Acquisition needs attention",
  },
  {
    title: "Active Accounts",
    value: "45,678",
    change: "+12.5%",
    trend: "up" as const,
    detail: "Strong user retention",
    sub: "Engagement exceed targets",
  },
  {
    title: "Growth Rate",
    value: "4.5%",
    change: "+4.5%",
    trend: "up" as const,
    detail: "Steady performance increase",
    sub: "Meets growth projections",
  },
];

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <Badge
                    variant="secondary"
                    className={`gap-1 text-xs font-medium ${
                      stat.trend === "up"
                        ? "text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-950"
                        : "text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-950"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-medium flex items-center gap-1">
                    {stat.detail}
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-3.5 w-3.5 text-green-600" />
                    ) : (
                      <TrendingDown className="h-3.5 w-3.5 text-red-500" />
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="pt-6">
            <VisitorsChart />
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
