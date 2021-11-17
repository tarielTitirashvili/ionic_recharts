import { IonItem, IonTitle } from '@ionic/react'
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
const data = [
  { name: 'Group A', value: 480 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 180 },
  { name: 'Group F', value: 260 },
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#FC0000', '#C553BA']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function Tab2() {
  let demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj'
  let demoUrl2 ='https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si'
  console.log('render')
  return (
    <>
      <IonItem>
        <IonTitle>Title2</IonTitle>
      </IonItem>
      <IonItem>
        <ResponsiveContainer width="100%" height={500}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={150}
              cy={290}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </IonItem>
    </>
  )
}