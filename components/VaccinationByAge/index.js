// Write your code here
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {name: 'Category A', value: 400},
  {name: 'Category B', value: 300},
  {name: 'Category C', value: 300},
  {name: 'Category D', value: 200},
]

//const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

const VaccinationByAge = props => {
  const {details} = props
  console.log('888888888888888888888')
  console.log(details)
  return (

    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={details}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#a3df9f" />
          <Cell name="45-60" fill="#64c2a6" />
          <Cell name="Above 60" fill="#2d87bb" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </ResponsiveContainer>
  )
  
}

export default VaccinationByAge
