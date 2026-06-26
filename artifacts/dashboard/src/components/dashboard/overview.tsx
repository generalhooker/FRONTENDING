import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", total: 4500 },
  { name: "Fev", total: 3200 },
  { name: "Mar", total: 6700 },
  { name: "Abr", total: 5100 },
  { name: "Mai", total: 8200 },
  { name: "Jun", total: 7400 },
  { name: "Jul", total: 9100 },
  { name: "Ago", total: 6300 },
  { name: "Set", total: 11200 },
  { name: "Out", total: 9800 },
  { name: "Nov", total: 13400 },
  { name: "Dez", total: 15600 },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `R$${(value / 1000).toFixed(0)}k`}
        />
        <Tooltip
          formatter={(value: number) =>
            [`R$ ${value.toLocaleString("pt-BR")}`, "Receita"]
          }
          labelStyle={{ color: "hsl(var(--foreground))" }}
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
          }}
        />
        <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
