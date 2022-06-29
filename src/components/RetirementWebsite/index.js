// Write your code here
import './index.css'
import {Component} from 'react'
import {BsSearch, BsPerson} from 'react-icons/bs'
import {IoHomeOutline} from 'react-icons/io5'
import {FaRegNewspaper} from 'react-icons/fa'
import {BiSpreadsheet} from 'react-icons/bi'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {TbLogout} from 'react-icons/tb'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    group_name: '20',
    Employer: 21,
    Employee: 30,
    Total_Interest: 40,
  },
  {key: 400, group_name: '25', Employer: 25, Employee: 45, Total_Interest: 65},
  {
    group_name: '30',
    Employer: 36,
    Employee: 56,
    Total_Interest: 75,
  },
  {
    group_name: '35',
    Employer: 45,
    Employee: 70,
    Total_Interest: 85,
  },
  {
    group_name: '40',
    Employer: 48,
    Employee: 86,
    Total_Interest: 120,
  },
  {
    group_name: '45',
    Employer: 52,
    Employee: 110,
    Total_Interest: 130,
  },
  {
    group_name: '50',
    Employer: 65,
    Employee: 110,
    Total_Interest: 135,
  },
  {
    group_name: '55',
    Employer: 70,
    Employee: 120,
    Total_Interest: 137,
  },
  {
    group_name: '60',
    Employer: 72,
    Employee: 126,
    Total_Interest: 150,
  },
  {
    group_name: '65',
    Employer: 83,
    Employee: 130,
    Total_Interest: 153,
  },
  {
    group_name: '70',
    Employer: 78,
    Employee: 146,
    Total_Interest: 160,
  },
  {
    group_name: '75',
    Employer: 85,
    Employee: 170,
    Total_Interest: 500,
  },
]

class RetirementWebsite extends Component {
  state = {
    selectedNavItem: 'Home',
    employeeContribution: 12,
    retirementAge: 65,
  }

  onChangeEmployeeContribution = event => {
    this.setState({
      employeeContribution: event.target.value,
    })
  }

  onChangeRetirementAge = event => {
    this.setState({
      retirementAge: event.target.value,
    })
  }

  render() {
    const {selectedNavItem, employeeContribution, retirementAge} = this.state
    const DataFormatter = number => {
      if (number > 1) {
        return `$${(number / 1).toString()}`
      }
      return number.toString()
    }

    return (
      <div className="main-container">
        <div className="page-container">
          <div className="navbar-container">
            <div className="logo-and-search-icon-container">
              <img
                src="https://res.cloudinary.com/adityak/image/upload/v1656500225/My_project_qrekbr.png"
                alt="logo"
                className="butterfly-logo"
              />
              <BsSearch size={20} color="grey" />
            </div>
            <ul className="nav-items-container">
              <li
                key="Home"
                className={`each-nav-item ${
                  selectedNavItem === 'Home' && 'active'
                }`}
              >
                <button type="button" className="each-nav-button">
                  <IoHomeOutline
                    size={23}
                    stroke={selectedNavItem === 'Home' ? '#ffffff' : 'grey'}
                  />
                </button>
              </li>
              <li
                key="News"
                className={`each-nav-item ${
                  selectedNavItem === 'News' && 'active'
                }`}
              >
                <button type="button" className="each-nav-button">
                  <FaRegNewspaper
                    size={26}
                    color={selectedNavItem === 'News' ? '#ffffff' : 'grey'}
                  />
                </button>
              </li>
              <li
                key="Sheet"
                className={`each-nav-item ${
                  selectedNavItem === 'Sheet' && 'active'
                }`}
              >
                <button type="button" className="each-nav-button">
                  <BiSpreadsheet
                    size={26}
                    color={selectedNavItem === 'Sheet' ? '#ffffff' : 'grey'}
                  />
                </button>
              </li>
              <li
                key="Profile"
                className={`each-nav-item ${
                  selectedNavItem === 'Profile' && 'active'
                }`}
              >
                <button type="button" className="each-nav-button">
                  <BsPerson
                    size={26}
                    color={selectedNavItem === 'Profile' ? '#ffffff' : 'grey'}
                  />
                </button>
              </li>
            </ul>
            <div className="logout-and-notification-container">
              <IoIosNotificationsOutline size={30} color="grey" />
              <TbLogout size={24} color="grey" style={{marginTop: '20px'}} />
            </div>
          </div>
          <div className="profile-details-sidebar">
            <div className="display-picture-and-name-container">
              <img
                src="https://res.cloudinary.com/adityak/image/upload/v1656503488/profile3_vt2tvd.jpg"
                className="profile-pic"
                alt="profile_picture"
              />
              <div className="name-container">
                <h1 className="name-text">Hi Mike,</h1>
                <p className="welcome-text">welcome beck.</p>
              </div>
            </div>
            <div className="today-container">
              <h1 className="sidebar-subheading">Today</h1>
              <h1 className="account-balance-text">$19,892</h1>
              <p className="label-text">Account Balance</p>
              <h2 className="money-text">$4,000</h2>
              <p className="label-text">Year-to-Date Contributions</p>
              <h2 className="money-text">$1,892</h2>
              <p className="label-text">Total Interest</p>
              <button type="button" className="want-to-btn">
                I want to...
              </button>
            </div>
            <div className="recent-transactions">
              <h1 className="sidebar-subheading">Recent Transactions</h1>
              <ul className="transactions-container">
                <li key="1" className="each-transaction">
                  <p className="date-text">2020-08-07</p>
                  <p className="transaction-info">
                    Withdrawal Transfer to Bank-XXX11
                  </p>
                </li>
                <li key="2" className="each-transaction">
                  <p className="date-text">2020-07-21</p>
                  <p className="transaction-info">
                    Withdrawal Transfer to Bank-XXX11
                  </p>
                </li>
                <li key="3" className="each-transaction">
                  <p className="date-text">2020-07-16</p>
                  <p className="transaction-info">
                    Withdrawal Transfer to Bank-XXX11
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="page-content-container">
            <div className="retirement-container">
              <h1 className="retirement-income-heading">Retirement Income</h1>
              <p className="starting-text">Starting Year 2056</p>
              <div className="goals-container">
                <div className="each-goal-container">
                  <h1 className="digit-text">$300,000</h1>
                  <p className="container-label-text">My Goal</p>
                </div>
                <div className="each-goal-container">
                  <h1 className="digit-text">59%</h1>
                  <p className="container-label-text">Goal Achieved</p>
                </div>
                <div className="each-goal-container">
                  <h1 className="digit-text">$300</h1>
                  <p className="container-label-text">Est. Monthly Income</p>
                </div>
              </div>

              <h1 className="contribution-heading">Contributions Overtime</h1>
              <div className="bar-graph-container">
                <ResponsiveContainer width="100%" height={370}>
                  <BarChart
                    data={data}
                    margin={{
                      top: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="5 5" vertical={false} />
                    <XAxis
                      dataKey="group_name"
                      tick={{
                        stroke: 'gray',
                        strokeWidth: 1,
                      }}
                      axisLine={false}
                      tickLine={false}
                      minTickGap={100}
                      allowDataOverflow
                    />
                    <YAxis
                      tickFormatter={DataFormatter}
                      tick={{
                        stroke: 'gray',
                        strokeWidth: 0,
                      }}
                      axisLine={false}
                      dataKey="key"
                      tickLine={false}
                    />
                    <Legend
                      wrapperStyle={{
                        padding: 35,
                      }}
                      verticalAlign="top"
                    />
                    <Bar
                      dataKey="Employer"
                      name="Employer"
                      fill="#121182"
                      barSize="4%"
                      stackId="a"
                    />
                    <Bar
                      dataKey="Employee"
                      name="Employee"
                      fill="#1010c7"
                      barSize="5%"
                      stackId="a"
                    />
                    <Bar
                      dataKey="Total_Interest"
                      name="Total Interest"
                      fill="#6bb0fa"
                      barSize="5%"
                      stackId="a"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <h1 className="ques-text">How do I compare to my peers?</h1>
              <p className="description-text">
                These numbers represent current goal achievement
              </p>
              <div className="age-salary-gender-and-pie-chart-container">
                <ul className="age-salary-gender-container">
                  <li className="each-item">
                    <label htmlFor="age" className="label-select-text">
                      Age:{'  '}
                    </label>
                    <select name="age" id="age">
                      <option value="under30">Under 30</option>
                      <option value="under40">Under 40</option>
                      <option value="under50">Under 50</option>
                    </select>
                  </li>
                  <hr />
                  <li className="each-item">
                    <label htmlFor="salary" className="label-select-text">
                      Salary:{'  '}
                    </label>
                    <select name="salary" id="salary">
                      <option value="20k-30k">20K - 30K</option>
                      <option value="30k-40k">30K - 40K</option>
                      <option value="40k-50k">40K - 50K</option>
                    </select>
                  </li>
                  <hr />
                  <li className="each-item">
                    <label htmlFor="gender" className="label-select-text">
                      Gender:{'  '}
                    </label>
                    <select name="gender" id="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </li>
                </ul>
                <ul className="progress-chart-container">
                  <li key="average" className="each-circular-bar">
                    <div className="progress-bar-container">
                      <CircularProgressbar
                        value={78}
                        text={`${78}%`}
                        styles={buildStyles({
                          textColor: '#000000',
                          pathColor: '#04cc79',
                          trailColor: '#bcebd7',
                        })}
                      />
                    </div>
                    <p className="circular-bar-label">Average</p>
                  </li>
                  <li key="top" className="each-circular-bar">
                    <div className="progress-bar-container">
                      <CircularProgressbar
                        value={95}
                        text={`${95}%`}
                        styles={buildStyles({
                          textColor: '#000000',
                          pathColor: '#04cc79',
                          trailColor: '#bcebd7',
                        })}
                      />
                    </div>
                    <p className="circular-bar-label">Top</p>
                  </li>
                  <li key="me" className="each-circular-bar">
                    <div className="progress-bar-container">
                      <CircularProgressbar
                        value={59}
                        text={`${59}%`}
                        styles={buildStyles({
                          textColor: '#000000',
                          x: '30',
                          pathColor: '#04cc79',
                          trailColor: '#bcebd7',
                        })}
                      />
                    </div>
                    <p className="circular-bar-label">Me</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="retirement-strategy-and-housing-advance-container">
              <div className="retirement-strategy-container">
                <h1 className="retirement-strategy-text">
                  Retirement Strategy
                </h1>
                <p className="retirement-strategy-subheading">
                  Employee Contribution
                </p>
                <div className="input-container">
                  <input
                    id="employeeContribution"
                    type="range"
                    min={0}
                    max={25}
                    step={1}
                    value={employeeContribution}
                    className="input-range"
                    onChange={this.onChangeEmployeeContribution}
                  />
                  <label
                    className="input-label-text"
                    htmlFor="employeeContribution"
                  >
                    {employeeContribution}%
                  </label>
                </div>
                <p className="retirement-strategy-subheading">Retirement Age</p>
                <div className="input-container">
                  <input
                    id="retirementAge"
                    type="range"
                    min={0}
                    max={80}
                    step={1}
                    value={retirementAge}
                    className="input-range"
                    onChange={this.onChangeRetirementAge}
                  />
                  <label className="input-label-text" htmlFor="retirementAge">
                    {retirementAge}
                  </label>
                </div>
                <hr />
                <div className="retirement-strategy-sub-container">
                  <p className="retirement-strategy-subheading">
                    Employer Contribution
                  </p>
                  <p className="retirement-strategy-subheading">8.4%</p>
                </div>
                <div className="retirement-strategy-sub-container">
                  <p className="retirement-strategy-subheading">
                    Interest Rate
                  </p>
                  <p className="retirement-strategy-subheading">5%</p>
                </div>
                <button type="button" className="update-btn">
                  Update
                </button>
                <button type="button" className="view-help-docs">
                  View Help Docs {`>`}
                </button>
              </div>
              <div className="housing-advance-container">
                <p className="housing-advance-text">
                  Are you considering a{' '}
                  <span className="span-text">Housing Advance?</span>
                </p>
                <p className="limited-time-text">
                  Limited time reduced interest.
                </p>
                <button type="button" className="learn-more-btn">
                  Learn More {`>`}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-view-navbar">
          <ul className="nav-items-container">
            <li
              key="Home"
              className={`each-nav-item ${
                selectedNavItem === 'Home' && 'active'
              }`}
            >
              <button type="button" className="each-nav-button">
                <IoHomeOutline
                  size={21}
                  stroke={selectedNavItem === 'Home' ? '#ffffff' : 'grey'}
                />
              </button>
            </li>
            <li
              key="News"
              className={`each-nav-item ${
                selectedNavItem === 'News' && 'active'
              }`}
            >
              <button type="button" className="each-nav-button">
                <FaRegNewspaper
                  size={24}
                  color={selectedNavItem === 'News' ? '#ffffff' : 'grey'}
                />
              </button>
            </li>
            <li
              key="Sheet"
              className={`each-nav-item ${
                selectedNavItem === 'Sheet' && 'active'
              }`}
            >
              <button type="button" className="each-nav-button">
                <BiSpreadsheet
                  size={24}
                  color={selectedNavItem === 'Sheet' ? '#ffffff' : 'grey'}
                />
              </button>
            </li>
            <li
              key="Profile"
              className={`each-nav-item ${
                selectedNavItem === 'Profile' && 'active'
              }`}
            >
              <button type="button" className="each-nav-button">
                <BsPerson
                  size={24}
                  color={selectedNavItem === 'Profile' ? '#ffffff' : 'grey'}
                />
              </button>
            </li>
            <li
              key="search"
              className={`each-nav-item ${
                selectedNavItem === 'Search' && 'active'
              }`}
            >
              <button type="button" className="each-nav-button">
                <BsSearch
                  size={20}
                  color={selectedNavItem === 'Search' ? '#ffffff' : 'grey'}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default RetirementWebsite
