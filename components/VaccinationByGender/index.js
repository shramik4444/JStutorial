// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'
const VaccinationByGender = props => {
  const {genderdetails} = props
  console.log('---------------------')
  console.log(genderdetails)

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart className="piecont">
        <Pie
          cx="50%"
          cy="50%"
          data={genderdetails}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#a3df9f" />
          <Cell name="Female" fill="#2cc6c6" />
          <Cell name="Others" fill="#cbd5e1" />
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

export default VaccinationByGender
