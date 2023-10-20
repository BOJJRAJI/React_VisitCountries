import {Component} from 'react'
import './App.css'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

class App extends Component {
  state = {countriesList: initialCountriesList, visitedCountriesList: []}

  componentDidMount() {
    const {countriesList} = this.state
    const visitedCountries = countriesList.filter(
      item => item.isVisited === true,
    )
    this.setState({visitedCountriesList: visitedCountries})
  }

  addToVisitedList = item => {
    const details = {...item, isVisited: true}

    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(list => {
        if (list.id === item.id) {
          return {...list, isVisited: true}
        }
        return list
      }),
      visitedCountriesList: [...prevState.visitedCountriesList, details],
    }))
  }

  removedFromVisitedList = item => {
    const {visitedCountriesList} = this.state
    const filterList = visitedCountriesList.filter(list => list.id !== item.id)
    this.setState(prevState => ({
      countriesList: prevState.countriesList.map(list => {
        if (list.id === item.id) {
          return {...list, isVisited: false}
        }
        return list
      }),
      visitedCountriesList: filterList,
    }))
  }

  render() {
    const {countriesList, visitedCountriesList} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Countries</h1>
        <ul className="countries-list-container">
          {countriesList.map(item => (
            <li className="list-item" key={item.id}>
              <p className="list-heading">{item.name}</p>
              {item.isVisited ? (
                <p className="visited-button" type="button">
                  Visited
                </p>
              ) : (
                <button
                  className="visit-button"
                  type="button"
                  onClick={() => this.addToVisitedList(item)}
                >
                  Visit
                </button>
              )}
            </li>
          ))}
        </ul>
        <h1 className="heading">Visited Countries</h1>
        {visitedCountriesList.length === 0 ? (
          <div className="no-view-container">
            <p className="para">No Countries Visited Yet!</p>
          </div>
        ) : (
          <ul className="visited-countries-container">
            {visitedCountriesList.map(item => (
              <li key={item.id} className="visited-list">
                <img src={item.imageUrl} className="image" alt="thumbnail" />
                <div className="text-button-container">
                  <p className="list-heading">{item.name}</p>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() => this.removedFromVisitedList(item)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default App
