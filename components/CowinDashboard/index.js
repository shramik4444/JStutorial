// Write your code here

import {Component} from 'react'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

class CowinDashboard extends Component {
  state = {bygender: [], byage: [], coverage: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {bygender, byage, coverage} = this.state
    const options = {
      method: 'GET',
      body: JSON.stringify(),
    }
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(
      vaccinationDataApiUrl,
      options
    )
    const data = await response.json()
    console.log(data)
    this.setState({bygender: data.vaccination_by_gender})
    this.setState({byage: data.vaccination_by_age})
    this.setState({coverage: data.last_7_days_vaccination})
  }

  render() {
    const {bygender, byage, coverage} = this.state
    return (
      <div className="bg-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
          alt="website logo"
        />
        <h1 className="headstyle">co-WIN</h1>
        <h1 className="headstyle">CoWIN Vaccination in India</h1>
        <VaccinationCoverage coveragedetails={coverage} />
        <h1 className="headstyle">Vaccination by gender</h1>
        {<VaccinationByGender genderdetails={bygender} />}
        <h1 className="headstyle">Vaccination by Age</h1>
        {<VaccinationByAge details={byage} />}
      </div>
    )
  }
}
export default CowinDashboard
