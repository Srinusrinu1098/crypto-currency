import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrencyList extends Component {
  state = {cryptoList: []}

  componentDidMount = () => {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      `https://apis.ccbp.in/crypto-currency-converter`,
    )
    const data = await response.json()
    console.log(data)

    const formattedData = data.map(eachData => ({
      id: eachData.id,
      currencyImg: eachData.currency_logo,
      currencyName: eachData.currency_name,
      usd: eachData.usd_value,
      euro: eachData.euro_value,
    }))
    this.setState({cryptoList: formattedData})
  }

  render() {
    const {cryptoList} = this.state
    return (
      <div>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="img"
        />
        <div className="card-container">
          <div className="card-flex">
            <p className="bottom-para">Coin Type</p>
            <div className="currency">
              <p className="bottom-para">USD</p>
              <p className="bottom-para">EURO</p>
            </div>
          </div>
          <ul className="ul">
            {cryptoList.map(eachCoin => (
              <CryptocurrencyItem key={eachCoin.id} value={eachCoin} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrencyList
