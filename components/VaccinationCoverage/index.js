// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const VaccinationCoverage = props => {
  const {coveragedetails} = props
  console.log('#############################')
  console.log(coveragedetails)
  const DataFormatter = number => {
    if (number > 0) {
      return `${(number*1500/3).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="card-cont">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={coveragedetails}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccine_date"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose_1" name="Dose1" fill="#2d87bb" barSize="20%" />
          <Bar dataKey="dose_2" name="Dose2" fill=" #f54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
