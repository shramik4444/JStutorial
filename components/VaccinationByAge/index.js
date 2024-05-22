// Write your code here
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts'

const VaccinationByAge = props => {
  const {details} = props
  console.log('888888888888888888888')
  console.log(details)
  return (
    <div className="card-cont">
      <h1 className="headstyle">Vaccination by Age</h1>
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
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
