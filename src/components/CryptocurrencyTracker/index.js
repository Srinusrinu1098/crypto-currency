import {Component} from 'react'
import CryptocurrencyList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bg-container">
        <CryptocurrencyList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
